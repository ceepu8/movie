import axios from "axios";
import * as ActionType from "./constants";

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest);
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDetailMovieFailed(error));
      });
  };
};
