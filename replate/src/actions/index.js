import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

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
