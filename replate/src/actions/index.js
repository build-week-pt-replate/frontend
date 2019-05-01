import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  //If it's a business account
  if (credentials.businessAccount === true) {
    return axios
      .post("http://localhost:3500/auth/bus/login", credentials)
      .then(res => {
        //Creates a token in local storage if login is successful
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_RESOLVED, payload: res.data.payload });
      })
      .catch(err => {
        console.log("login err: ", err);
        //If login is unsuccessful due to wrong credentials remove from local
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });
      });
  } else {
    //If volunteer account businessAccount === false
    return axios
      .post("http://localhost:3500/auth/vol/login", credentials)
      .then(res => {
        //Creates a token in local storage if login is successful
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_RESOLVED, payload: res.data.payload });
      })
      .catch(err => {
        console.log("login err: ", err);
        //If login is unsuccessful due to wrong credentials remove from local
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });
      });
  }
};

export const CREATING_VOLUNTEER_ACCOUNT_START =
  "CREATING_VOLUNTEER_ACCOUNT_START";
export const CREATING_VOLUNTEER_ACCOUNT_SUCCESS =
  "CREATING_VOLUNTEER_ACCOUNT_SUCCESS";
export const CREATING_VOLUNTEER_ACCOUNT_FAILURE =
  "CREATING_VOLUNTEER_ACCOUNT_FAILURE";

export const createVolunteerAccount = volunteer => dispatch => {
  dispatch({ type: CREATING_VOLUNTEER_ACCOUNT_START });
  console.log("Hello this function worked");

  return axios
    .post("localhost:3500/auth/vol/register", volunteer)
    .then(res => {
      console.log(res, res.data);
      dispatch({
        type: CREATING_VOLUNTEER_ACCOUNT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CREATING_VOLUNTEER_ACCOUNT_FAILURE,
        payload: err
      });
    });
};

// Fetch Volunteer Dashboard/Data?
export const FETCH_VOLUNTEER_DATA_START = "FETCH_VOLUNTEER_DATA_START";
export const FETCH_VOLUNTEER_DATA_SUCCESS = "FETCH_VOLUNTEER_DATA_SUCCESS";
export const FETCH_VOLUNTEER_DATA_FAILURE = "FETCH_VOLUNTEER_DATA_FAILURE";

export const fetchVolunteerData = volunteerId => dispatch => {
  dispatch({ type: FETCH_VOLUNTEER_DATA_START });
  axios
    .get(`http://localhost:3500/api/volunteer/${volunteerId}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_VOLUNTEER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_VOLUNTEER_DATA_FAILURE, payload: err.response });
    });
};

//Fetch Volunteer Requests Data
export const FETCH_VOLUNTEER_REQUESTS_START = "FETCH_VOLUNTEER_REQUESTS_START";
export const FETCH_VOLUNTEER_REQUESTS_SUCCESS =
  "FETCH_VOLUNTEER_REQUESTS_SUCCESS";
export const FETCH_VOLUNTEER_REQUESTS_FAILURE =
  "FETCH_VOLUNTEER_REQUESTS_FAILURE";

export const fetchVolunteerRequests = () => dispatch => {
  dispatch({ type: FETCH_VOLUNTEER_REQUESTS_START });
  axios
    .get("http://localhost:3500/api/request")
    .then(res => {
      console.log(res, res.data);
      dispatch({
        type: FETCH_VOLUNTEER_REQUESTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_VOLUNTEER_REQUESTS_FAILURE,
        payload: err
      });
    });
};

export const CREATING_BUSINESS_ACCOUNT_START =
  "CREATING_BUSINESS_ACCOUNT_START";
export const CREATING_BUSINESS_ACCOUNT_SUCCESS =
  "CREATING_BUSINESS_ACCOUNT_SUCCESS";
export const CREATING_BUSINESS_ACCOUNT_FAILURE =
  "CREATING_BUSINESS_ACCOUNT_FAILURE";

export const createBusinessAccount = newAccount => dispatch => {
  dispatch({ type: CREATING_BUSINESS_ACCOUNT_START });

  // const testUrl = 'http://demo7153249.mockable.io/business';
  const testTwoUrl = "http://www.mocky.io/v2/5cc6b773320000661ab94d80";
  // const url = 'http://localhost:3500/auth/bus/register';

  const request = axios.post(testTwoUrl, newAccount);
  console.log("TEST-NEWACCOUNT::", newAccount);
  return request
    .then(({ data }) => {
      console.log("POST::", data);
      dispatch({
        type: CREATING_BUSINESS_ACCOUNT_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: CREATING_BUSINESS_ACCOUNT_FAILURE,
        payload: err
      });
    });
};

export const DELETING_BUSINESS_ACCOUNT_SUCCESS =
  "DELETING_BUSINESS_ACCOUNT_SUCCESS";
export const DELETING_BUSINESS_ACCOUNT_FAILURE =
  "DELETING_BUSINESS_ACCOUNT_FAILURE";

export const deleteBusiness = businessId => dispatch => {
  const request = axios.delete(`http://api/business/${businessId}`);

  return request
    .then(res => {
      dispatch({
        type: DELETING_BUSINESS_ACCOUNT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: DELETING_BUSINESS_ACCOUNT_FAILURE,
        error: err
      });
    });
};

export const UPDATING_BUSINESS = "UPDATING_BUSINESS";

export const updatingBusiness = businessId => dispatch => {
  dispatch({
    type: UPDATING_BUSINESS,
    payload: businessId
  });
};

export const UPDATING_BUSINESS_SUCCESS = "UPDATING_BUSINESS_SUCCESS";
export const UPDATING_BUSINESS_FAILURE = "UPDATING_BUSINESS_FAILURE";

export const saveUpdatedBusiness = updatedBusiness => dispatch => {
  const request = axios.put(
    `http://api/business/${updatedBusiness.id}`,
    updatedBusiness
  );

  return request
    .then(res => {
      console.log("UPDATE RESPONSE:", res);
      dispatch({
        type: UPDATING_BUSINESS_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATING_BUSINESS_FAILURE,
        error: err
      });
    });
};
