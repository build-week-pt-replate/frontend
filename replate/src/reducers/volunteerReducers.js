import {
  CREATING_VOLUNTEER_ACCOUNT_START,
  CREATING_VOLUNTEER_ACCOUNT_SUCCESS,
  CREATING_VOLUNTEER_ACCOUNT_FAILURE,
  DELETING_VOLUNTEER_ACCOUNT_START,
  DELETING_VOLUNTEER_ACCOUNT_SUCCESS,
  DELETING_VOLUNTEER_ACCOUNT_FAILURE,
  FETCH_VOLUNTEER_DATA_FAILURE,
  FETCH_VOLUNTEER_DATA_START,
  FETCH_VOLUNTEER_DATA_SUCCESS,
  FETCH_VOLUNTEER_REQUESTS_FAILURE,
  FETCH_VOLUNTEER_REQUESTS_START,
  FETCH_VOLUNTEER_REQUESTS_SUCCESS
} from "../actions/index";

const mockData = [
  {
    id: 1,
    locationName: "Burger King",
    date: "2019-20-09",
    time: "2:30pm",
    foodDescription: "a juicy burger",
    comment: "Hello there"
  },
  {
    id: 2,
    locationName: "Papa Johns",
    date: "2019-20-08",
    time: "5:30pm",
    foodDescription: "a juicy pizza",
    comment: "Backdoor delivery"
  }
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

const volunteerReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case DELETING_VOLUNTEER_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETING_VOLUNTEER_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDeletingVolunteer: true,
        error: null,
        account: action.payload
      };
    case DELETING_VOLUNTEER_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDeletingVolunteer: false,
        error: action.payload
      };
    case FETCH_VOLUNTEER_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_VOLUNTEER_DATA_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        fetchingData: false,
        account: action.payload
      };
    case FETCH_VOLUNTEER_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case FETCH_VOLUNTEER_REQUESTS_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_VOLUNTEER_REQUESTS_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingData: false,
        requests: action.payload
      };
    case FETCH_VOLUNTEER_REQUESTS_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default volunteerReducer;
