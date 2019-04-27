import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

export const LOGIN = {
  LOGIN_START: "LOGIN_START",
  LOGIN_RESOLVED: "LOGIN_RESOLVED"
};

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("", credentials)
    .then(res => {
      //Add token on this line
      dispatch({ type: LOGIN_RESOLVED });
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response.status === 403) {
        //Remove token on this line;
      }
      dispatch({ type: LOGIN_RESOLVED });
    });
};

export const CREATING_VOLUNTEER_ACCOUNT_START =
  "CREATING_VOLUNTEER_ACCOUNT_START";
export const CREATING_VOLUNTEER_ACCOUNT_SUCCESS =
  "CREATING_VOLUNTEER_ACCOUNT_SUCCESS";
export const CREATING_VOLUNTEER_ACCOUNT_FAILURE =
  "CREATING_VOLUNTEER_ACCOUNT_FAILURE";

export const createVolunteerAccount = newAccount => dispatch => {
  dispatch({ type: CREATING_VOLUNTEER_ACCOUNT_START });

  return axios
    .post("http://localhost:3500/auth/vol/register", newAccount)
    .then(res => {
      console.log(res);
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

export const CREATING_BUSINESS_ACCOUNT_START =
  "CREATING_BUSINESS_ACCOUNT_START";
export const CREATING_BUSINESS_ACCOUNT_SUCCESS =
  "CREATING_BUSINESS_ACCOUNT_SUCCESS";
export const CREATING_BUSINESS_ACCOUNT_FAILURE =
  "CREATING_BUSINESS_ACCOUNT_FAILURE";

export const createBusinessAccount = newAccount => dispatch => {
  dispatch({ type: CREATING_BUSINESS_ACCOUNT_START });

  const request = axios.post(
    `http://localhost:3500/auth/bus/register`,
    newAccount
  );

  return request
    .then(res => {
      dispatch({
        type: CREATING_BUSINESS_ACCOUNT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: CREATING_BUSINESS_ACCOUNT_FAILURE,
        payload: err
      });
    });
};
