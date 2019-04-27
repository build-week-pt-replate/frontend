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

export const createVolunteerAccount = newAccount => dispatch => {
  dispatch({ type: CREATING_VOLUNTEER_ACCOUNT_START });

  return axios
    .post("http://localhost:3500/auth/vol/register", newAccount)
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

//Fetch Volunteer Dashboard/Data?
// export const FETCH_VOLUNTEER_DATA_START = "FETCH_VOLUNTEER_DATA_START";
// export const FETCH_VOLUNTEER_DATA_SUCCESS = "FETCH_VOLUNTEER_DATA_SUCCESS";
// export const FETCH_VOLUNTEER_DATA_FAILURE = "FETCH_VOLUNTEER_DATA_FAILURE";

// export const fetchVolunteerData = () => dispatch => {
//   dispatch({type: FETCH_VOLUNTEER_DATA_START});
//   axios
//     .get('')
//     .then()
//     .catch(err => )
// }

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
