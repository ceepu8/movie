import * as ActionType from "./constants";
import axios from "axios";

const actUserLoginRequest = () => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};

const actUserLoginSuccess = (data) => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actUserLoginFailed = (err) => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: err,
  };
};

export const actFetchUserLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actUserLoginRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        localStorage.setItem("UserLogin", JSON.stringify(result.data));
        dispatch(actUserLoginSuccess(result.data));
        if (history.location.state) {
          history.push({
            pathname: history.location.state.nextPathname,
            state: {
              cinemaID: history.location.state.cinemaID,
            },
          });
        } else {
          history.push({
            pathname: "/",
            state: {
              from: "/log-in",
            },
          });
        }
      })
      .catch((err) => {
        dispatch(actUserLoginFailed(err));
      });
  };
};
