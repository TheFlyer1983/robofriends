import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware]);

const mockRobots = {
  id: 1,
  name: 'John Smith',
  username: 'John',
  email: 'john@test.com',
};

describe('Search Actions', () => {
  afterEach(() => {
    fetchMock.restore();
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
  it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it('success', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
      body: mockRobots,
      headers: { 'content-type': 'applicaton/json' },
    });

    const expectedActions = [
      {
        type: REQUEST_ROBOTS_PENDING,
      },
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobots,
      },
    ];

    const store = mockStore();
    
    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

    // it('failure', () => {
    //   fetchMock.getOnce('', {
    //     body: {},
    //     headers: { 'content-type': 'applicaton/json' },
    //   });

    //   const expectedActions = [
    //     {
    //       type: REQUEST_ROBOTS_PENDING,
    //     },
    //     {
    //       type: REQUEST_ROBOTS_FAILED,
    //       payload: {},
    //     },
    //   ];

    //   const store = mockStore();
    //   expect.assertions(1);
    //   return store.dispatch(actions.requestRobots()).catch(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
  });
});
