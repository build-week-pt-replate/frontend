import {
  FETCH_VOLUNTEER_DATA_FAILURE,
  FETCH_VOLUNTEER_DATA_START,
  FETCH_VOLUNTEER_DATA_SUCCESS,
  FETCH_VOLUNTEER_REQUESTS_FAILURE,
  FETCH_VOLUNTEER_REQUESTS_START,
  FETCH_VOLUNTEER_REQUESTS_SUCCESS
} from "../actions/index";
import { CardActionArea } from "@material-ui/core";

const initialState = {
  account: null,
  isLoading: false,
  error: null,
  isBusinessInEditMode: null,
  isDeletingBusiness: false,
  requests: [],
  fetchingData: false
};

const volunteerReducer = (state = initialState, action) => {
  switch (action.type) {
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
        requests: action.payload.filter(request)
      };
  }
};
