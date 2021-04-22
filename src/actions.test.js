import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

const mockRobots = {
  id: 1,
  name: 'John Smith',
  username: 'John',
  email: 'john@test.com',
};

describe('Search Actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('Robot Actions', () => {
  describe('calls the API', () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockRobots),
        })
      );
    });
    it('success', () => {
      // fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
      //   body: mockRobots,
      //   headers: { 'content-type': 'applicaton/json' },
      // });
      const store = mockStore();

      const expectedActions = [
        {
          type: REQUEST_ROBOTS_PENDING,
        },
        {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: mockRobots,
        },
      ];

      return store.dispatch(actions.requestRobots()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('catches the error', () => {
      const errorMessage = 'API is down';
      beforeEach(() => {
        window.fetch = jest.fn(() => Promise.reject(errorMessage));
      });

      it('failure', () => {
        const store = mockStore();

        const expectedActions = [
          {
            type: REQUEST_ROBOTS_PENDING,
          },
          {
            type: REQUEST_ROBOTS_FAILED,
            payload: errorMessage,
          },
        ];

        return store.dispatch(actions.requestRobots()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
