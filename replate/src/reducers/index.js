import {
  CREATING_BUSINESS_ACCOUNT_START,
  CREATING_BUSINESS_ACCOUNT_SUCCESS,
  CREATING_BUSINESS_ACCOUNT_FAILURE,
  CREATING_VOLUNTEER_ACCOUNT_START,
  CREATING_VOLUNTEER_ACCOUNT_SUCCESS,
  CREATING_VOLUNTEER_ACCOUNT_FAILURE
} from "../actions";

const initialState = {
  account: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATING_BUSINESS_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case CREATING_BUSINESS_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        account: action.payload
      };
    case CREATING_BUSINESS_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CREATING_VOLUNTEER_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case CREATING_VOLUNTEER_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        account: action.payload
      };
    case CREATING_VOLUNTEER_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
