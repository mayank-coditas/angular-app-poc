import * as Actions from './actions';

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0
};

export function AppReducer(state = initialState, action) {

  switch (action.type) {
    case Actions.UPDATE:
      return action.payload;
    default:
      return state;
  }

}
