import * as Actions from './actions';

export interface AppState {
  angular: number;
  react: number;
}

const initialState: AppState = {
  angular: 0,
  react: 0
};

export function AppReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.UPDATE:
      return action.payload;
    default:
      return state;
  }

}
