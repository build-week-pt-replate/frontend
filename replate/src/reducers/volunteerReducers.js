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
  FETCH_VOLUNTEER_REQUESTS_SUCCESS,
  LOGIN_START,
  LOGIN_RESOLVED,
  ACCEPT_VOLUNTEER_REQUESTS_START,
  ACCEPT_VOLUNTEER_REQUESTS_FAILURE,
  ACCEPT_VOLUNTEER_REQUESTS_SUCCESS,
  REMOVE_VOLUNTEER_REQUESTS_START,
  REMOVE_VOLUNTEER_REQUESTS_FAILURE,
  REMOVE_VOLUNTEER_REQUESTS_SUCCESS,
  COMPLETE_VOLUNTEER_REQUESTS_START,
  COMPLETE_VOLUNTEER_REQUESTS_SUCCESS,
  COMPLETE_VOLUNTEER_REQUESTS_FAILURE
} from "../actions/index";

const mockDataVolunteer = [
  {
    id: 1,
    requestDate: "2019-04-24",
    requestTime: "11:00:00",
    locationName: "Hunger First",
    locationStreet: "111 Kenwood Rd",
    locationCity: "Knoxville",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Various canned food items",
    comment: "Can be picked up anytime before 2pm",
    businessId: 1,
    volunteerId: null,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  },
  {
    id: 2,
    requestDate: "2019-04-27",
    requestTime: "10:30:00",
    locationName: "Hope Shelter",
    locationStreet: "110 Carolina Street",
    locationCity: "Knoxville",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Boxed and canned items",
    comment: "",
    businessId: 2,
    volunteerId: 1,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  },
  {
    id: 3,
    requestDate: "2019-04-27",
    requestTime: "10:30:00",
    locationName: "Hope Shelter",
    locationStreet: "110 Carolina Street",
    locationCity: "San Francisco",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Boxed and canned items",
    comment: "",
    businessId: 3,
    volunteerId: null,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  },
  {
    id: 4,
    requestDate: "2019-04-27",
    requestTime: "10:30:00",
    locationName: "Hope Shelter",
    locationStreet: "110 Carolina Street",
    locationCity: "San Francisco",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Boxed and canned items",
    comment: "",
    businessId: 7,
    volunteerId: null,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  },
  {
    id: 5,
    requestDate: "2019-04-27",
    requestTime: "10:30:00",
    locationName: "Hope Shelter",
    locationStreet: "110 Carolina Street",
    locationCity: "San Francisco",
    locationState: "TN",
    locationZip: "37902",
    foodDescription: "Boxed and canned items",
    comment: "",
    businessId: 9,
    volunteerId: null,
    created_at: "2019-04-30 03:26:56",
    updated_at: "2019-04-30 03:26:56"
  }
];

const initialState = {
  account: null,
  isLoading: false,
  error: null,
  isBusinessInEditMode: null,
  isDeletingVolunteer: false,
  isDeletingBusiness: false,
  requests: mockDataVolunteer,
  fetchingData: false,
};

const volunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoading: false,
        account: action.payload
      };
    }
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
        requests: mockDataVolunteer
      };
    case FETCH_VOLUNTEER_REQUESTS_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case ACCEPT_VOLUNTEER_REQUESTS_START:
      return {
        ...state,
        isLoading: true
      };
    case ACCEPT_VOLUNTEER_REQUESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        requests: action.payload
      };
    case ACCEPT_VOLUNTEER_REQUESTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case REMOVE_VOLUNTEER_REQUESTS_START:
      return {
        ...state,
        isLoading: true
      };
    case REMOVE_VOLUNTEER_REQUESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        requests: action.payload
      };
    case REMOVE_VOLUNTEER_REQUESTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case COMPLETE_VOLUNTEER_REQUESTS_START:
      return {
        ...state,
        isLoading: true
      };
    case COMPLETE_VOLUNTEER_REQUESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        account: action.payload
      };
    case COMPLETE_VOLUNTEER_REQUESTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default volunteerReducer;
