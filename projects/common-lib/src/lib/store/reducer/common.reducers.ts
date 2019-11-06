import { CommonState } from '../state/common.state';
import { CommonActions, CommonActionTypes } from '../action/common.actions';

export const initialCommonState: CommonState = {
  readOnlyMode: false,
};

export function commonReducer(state = initialCommonState, action: CommonActions): CommonState {
  switch (action.type) {
    case CommonActionTypes.SetReadonlyMode: {
      return {
        ...state,
        readOnlyMode: action.payload.readOnly,
      };
    }
    default: {
      return state;
    }
  }
}