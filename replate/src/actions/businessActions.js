import axios from "axios";

export const CREATING_BUSINESS_ACCOUNT_START =
  "CREATING_BUSINESS_ACCOUNT_START";
export const CREATING_BUSINESS_ACCOUNT_SUCCESS =
  "CREATING_BUSINESS_ACCOUNT_SUCCESS";
export const CREATING_BUSINESS_ACCOUNT_FAILURE =
  "CREATING_BUSINESS_ACCOUNT_FAILURE";

export const createBusinessAccount = newAccount => dispatch => {
  dispatch({ type: CREATING_BUSINESS_ACCOUNT_START });

  // const url = 'http://localhost:3500/auth/bus/register';
  const url = "https://replate-be.herokuapp.com/auth/bus/register";

  const request = axios.post(url, newAccount);
  console.log("TEST-NEWACCOUNT::", newAccount);

  return request
    .then(({ data }) => {
      console.log("POST::", data);

      // localStorage.removeItem("token");
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.id);

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
      return Promise.reject(err);
    });
};

// Fetch Business Requests / Donations
export const FETCH_BUSINESS_REQUESTS_START = "FETCH_BUSINESS_REQUESTS_START";
export const FETCH_BUSINESS_REQUESTS_SUCCESS =
  "FETCH_BUSINESS_REQUESTS_SUCCESS";
export const FETCH_BUSINESS_REQUESTS_FAILURE =
  "FETCH_BUSINESS_REQUESTS_FAILURE";

export const fetchBusinessRequests = () => dispatch => {
  dispatch({
    type: FETCH_BUSINESS_REQUESTS_START
  });

  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const url = 'https://replate-be.herokuapp.com/api/request';
  const request = axios.get(url, config);

  return request
    .then(({ data }) => {

      console.log("FETCH-REQUEST:", data);

      dispatch({
        type: FETCH_BUSINESS_REQUESTS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_BUSINESS_REQUESTS_FAILURE,
        payload: err
      });
      return Promise.reject(err);
    });
};

export const FETCH_BUSINESS_DATA_START = "FETCH_BUSINESS_DATA_START";
export const FETCH_BUSINESS_DATA_SUCCESS = "FETCH_BUSINESS_DATA_SUCCESS";
export const FETCH_BUSINESS_DATA_FAILURE = "FETCH_BUSINESS_DATA_FAILURE";

export const fetchBusinessData = businessId => dispatch => {
  dispatch({ type: FETCH_BUSINESS_DATA_START });

  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const url = `https://replate-be.herokuapp.com/api/business/${businessId}`;
  const request = axios.get(url, config);

    return request
      .then(({data}) => {
        console.log('IN-ACTION-FETCH-DATA', data)
        dispatch({
        type: FETCH_BUSINESS_DATA_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({
        type: FETCH_BUSINESS_DATA_FAILURE,
        payload: err.response
      });
      return Promise.reject(err);
    });
};

export const ADDING_DONATION_START = "ADDING_DONATION_START";
export const ADDING_DONATION_SUCCESS = "ADDING_DONATION_SUCCESS";
export const ADDING_DONATION_FAILURE = "ADDING_DONATION_FAILURE";

export const addDonation = newDonation => dispatch => {
  dispatch({ type: ADDING_DONATION_START });
  const url = "https://replate-be.herokuapp.com/api/request";

  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const request = axios.post(url, newDonation, config);
  console.log("TEST-DONATION::", newDonation);

  return request
    .then(({ data }) => {
      console.log("DONATION-POST::", data);
      dispatch({
        type: ADDING_DONATION_SUCCESS,
        payload: data
      });
    })

    .catch(err => {
      dispatch({
        type: ADDING_DONATION_FAILURE,
        payload: err
      });
      // need this Promise in order to properly handle errors
      return Promise.reject(err);
    });
};

export const DELETING_BUSINESS_ACCOUNT_SUCCESS =
  "DELETING_BUSINESS_ACCOUNT_SUCCESS";
export const DELETING_BUSINESS_ACCOUNT_FAILURE =
  "DELETING_BUSINESS_ACCOUNT_FAILURE";

export const deleteBusiness = businessId => dispatch => {
  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const url = `https://replate-be.herokuapp.com/api/business/${businessId}`;

  const request = axios.delete(url, config);

  return request
    .then(({data}) => {
      dispatch({
        type: DELETING_BUSINESS_ACCOUNT_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: DELETING_BUSINESS_ACCOUNT_FAILURE,
        error: err
      });
      return Promise.reject(err);
    });
};

export const DELETING_BUSINESS_REQUEST_SUCCESS =
  "DELETING_BUSINESS_REQUEST_SUCCESS";
export const DELETING_BUSINESS_REQUEST_FAILURE =
  "DELETING_BUSINESS_REQUEST_FAILURE";

export const deleteBusinessRequest = requestId => dispatch => {
  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const url = `https://replate-be.herokuapp.com/api/request/${requestId}`;

  const request = axios.delete(url, config);

  return request
    .then(({data}) => {
      dispatch({
        type: DELETING_BUSINESS_REQUEST_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: DELETING_BUSINESS_REQUEST_FAILURE,
        error: err
      });
      return Promise.reject(err);
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
  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const config = {
    headers: { Authorization: token }
  };

  const url = `https://replate-be.herokuapp.com/api/business/${updatedBusiness.id}`;

  const request = axios.put(url, updatedBusiness, config);

  return request
    .then(({data}) => {
      console.log("UPDATE RESPONSE:", data);
      dispatch({
        type: UPDATING_BUSINESS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATING_BUSINESS_FAILURE,
        error: err
      });
      return Promise.reject(err);
    });
};
