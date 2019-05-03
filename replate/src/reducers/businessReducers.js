import {
  CREATING_BUSINESS_ACCOUNT_START,
  CREATING_BUSINESS_ACCOUNT_SUCCESS,
  CREATING_BUSINESS_ACCOUNT_FAILURE,
  ADDING_DONATION_START,
  ADDING_DONATION_SUCCESS,
  ADDING_DONATION_FAILURE,
  DELETING_BUSINESS_ACCOUNT_SUCCESS,
  DELETING_BUSINESS_ACCOUNT_FAILURE,
  UPDATING_BUSINESS,
  UPDATING_BUSINESS_SUCCESS,
  UPDATING_BUSINESS_FAILURE,
  LOGIN_START,
  LOGIN_RESOLVED
} from "../actions/businessActions";

const mockData = [

  {
    id: 1,
    locationName: 'Burger King',
    date: '2019-20-09',
    time: '2:30pm',
    foodDescription: 'a juicy burger',
    comment: 'Hello there'
  },
  {
    id: 2,
    locationName: 'Papa Johns',
    date: '2019-20-08',
    time: '5:30pm',
    foodDescription: 'a juicy pizza',
    comment: 'Backdoor delivery'
  },
]

const initialState = {
  account: null,
  isLoading: false,
  error: null,
  isBusinessInEditMode: null,
  isDeletingVolunteer: false,
  isDeletingBusiness: false,
  requests: [],
  fetchingData: false
};

const businessReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        account: action.payload
      }
    }
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
    case ADDING_DONATION_START:
      return {
        ...state,
        isLoading: true
      };
    case ADDING_DONATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        requests: [...state.requests, action.payload]
      };
    case ADDING_DONATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UPDATING_BUSINESS:
      return {
        ...state,
        isBusinessInEditMode: action.payload
      };
    case UPDATING_BUSINESS_SUCCESS:
      return {
        ...state,
        isBusinessInEditMode: null,
        error: null,
        account: action.payload
      };
    case UPDATING_BUSINESS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETING_BUSINESS_ACCOUNT_SUCCESS:
      return {
        ...state,
        isDeletingBusiness: true,
        error: null,
        account: action.payload
      };
    case DELETING_BUSINESS_ACCOUNT_FAILURE:
      return {
        ...state,
        isDeletingBusiness: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default businessReducers;
