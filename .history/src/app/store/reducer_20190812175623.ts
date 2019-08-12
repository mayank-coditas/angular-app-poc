import { Update } from './actions';

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0
};

export function AppReducer(state = initialState, action) {

  switch (action.type) {
    case Update:
      return {
        value: action.payload
      };
  }

}
