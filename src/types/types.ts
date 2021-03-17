export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export type Robots = Array<IRobot>;

export interface IAppProps {
  color?: string;
}

export interface ICounterState {
  count: number;
}

export interface IErrorState {
  hasError: boolean;
}

export type Props = {
  children?: JSX.Element;
};

export interface ISearchBoxProps {
  searchfield?: string;
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export interface IActions {
  type: string;
  payload?: any;
}