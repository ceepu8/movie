import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/MovieDetail/modules/reducer";
import cinemaListReducer from "../../components/ShowtimeTable/modules/reducer";
import cinemaPlaceReducer from "../../components/ShowtimeTable/cinemaItem/modules/reducer";
import userReducer from "../../containers/HomeTemplate/LoginPage/modules/reducer";
import registerReducer from "../../containers/HomeTemplate/SignUpPage/modules/reducer";
import movieScheduleReducer from "../../components/MovieBox/modules/reducer";
import boxOfficeReducer from "../../containers/HomeTemplate/BookingPage/modules/reducer";
import bookingReducer from "../../containers/HomeTemplate/BookingPage/PaymentSection/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  cinemaListReducer,
  cinemaPlaceReducer,
  userReducer,
  registerReducer,
  movieScheduleReducer,
  boxOfficeReducer,
  bookingReducer
});

export default rootReducer;
