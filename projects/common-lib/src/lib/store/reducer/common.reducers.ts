import { CommonActions, CommonActionTypes } from '../action/common.actions';
import { CommonState } from '../state/common.state';

export const initialCommonState: CommonState = {
  readOnlyMode: false,
  features: null
};

export function commonReducer(state = initialCommonState, action: CommonActions): CommonState {
  switch (action.type) {
    case CommonActionTypes.SetReadonlyMode: {
      return {
        ...state,
        readOnlyMode: action.payload.readOnly,
      };
    }
    case CommonActionTypes.GetFeaturesSuccess: {
      return {
        ...state,
        features: action.payload.features,
      };
    }
    default: {
      return state;
    }
  }
}