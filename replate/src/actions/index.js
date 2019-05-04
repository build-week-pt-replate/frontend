import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

export const login = ({ email, password, businessAccount }) => dispatch => {
  dispatch({ type: LOGIN_START });

  //If it's a business account
  if (businessAccount) {
    return axios
      .post("https://replate-be.herokuapp.com/auth/bus/login", { email, password })
      .then(res => {
        //Creates a token in local storage if login is successful

        console.log('RES', res);

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
        return Promise.reject(err);
      });
  } else {
    //If volunteer account businessAccount === false
    return axios
      .post("https://replate-be.herokuapp.com/auth/vol/login", { email, password })
      .then(res => {
        console.log(res, res.data, { email, password });
        //Creates a token in local storage if login is successful
        localStorage.setItem("token", res.data);
        dispatch({ type: LOGIN_RESOLVED, payload: res.data });
      })
      .catch(err => {
        console.log("login err: ", err, { email, password });
        //If login is unsuccessful due to wrong credentials remove from local
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });

        return Promise.reject(err);
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
  console.log("Hello this function worked", volunteer);

  return axios
    .post("https://replate-be.herokuapp.com/auth/vol/register", volunteer)
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
      return Promise.reject(err);
    });
};

export const DELETING_VOLUNTEER_ACCOUNT_START =
  "DELETING_VOLUNTEER_ACCOUNT_START";
export const DELETING_VOLUNTEER_ACCOUNT_SUCCESS =
  "DELETING_VOLUNTEER_ACCOUNT_SUCCESS";
export const DELETING_VOLUNTEER_ACCOUNT_FAILURE =
  "DELETING_VOLUNTEER_ACCOUNT_FAILURE";

export const deleteVolunteerAccount = volunteerId => dispatch => {
  dispatch({ type: DELETING_VOLUNTEER_ACCOUNT_START });
  console.log("This volunteer's id is:", volunteerId);

  return axios
    .delete(`https://replate-be.herokuapp.com/api/volunteer/${volunteerId}`)
    .then(res => {
      console.log(res, res.data, "This volunteer has been deleted");
      dispatch({
        type: DELETING_VOLUNTEER_ACCOUNT_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETING_VOLUNTEER_ACCOUNT_FAILURE,
        payload: err
      });
      return Promise.reject(err);
    });
};

// Fetch Volunteer Dashboard/Data?
export const FETCH_VOLUNTEER_DATA_START = "FETCH_VOLUNTEER_DATA_START";
export const FETCH_VOLUNTEER_DATA_SUCCESS = "FETCH_VOLUNTEER_DATA_SUCCESS";
export const FETCH_VOLUNTEER_DATA_FAILURE = "FETCH_VOLUNTEER_DATA_FAILURE";

//This will fetch the SPECIFIC volunteer when logging in
export const fetchVolunteerData = volunteerId => dispatch => {
  dispatch({ type: FETCH_VOLUNTEER_DATA_START });
  axios
    .get(`https://replate-be.herokuapp.com/api/volunteer/${volunteerId}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res, 'Did i make it to fetch success?');
      dispatch({ type: FETCH_VOLUNTEER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response, "You got an error");
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_VOLUNTEER_DATA_FAILURE, payload: err.response });
      return Promise.reject(err);
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
    .get("https://replate-be.herokuapp.com/api/request")
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
      return Promise.reject(err);
    });
};

//Fetch Volunteer Requests Data
export const ACCEPT_VOLUNTEER_REQUESTS_START = "ACCEPT_VOLUNTEER_REQUESTS_START";
export const ACCEPT_VOLUNTEER_REQUESTS_SUCCESS =
  "ACCEPT_VOLUNTEER_REQUESTS_SUCCESS";
export const ACCEPT_VOLUNTEER_REQUESTS_FAILURE =
  "ACCEPT_VOLUNTEER_REQUESTS_FAILURE";

export const addVolunteerRequests = requestId => dispatch => {

}
