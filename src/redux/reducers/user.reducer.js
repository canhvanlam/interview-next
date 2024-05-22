
import {STORAGE_KEY} from '../../constants/application.constant';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../../redux/actions/user.actions';
import cookies from 'js-cookie';
//const isBrowser = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
const getInitialAuthState = () => {
  // if (isBrowser()) {
  //   return {
  //     user: '',
  //     authToken: localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN),
  //   };
  // }
  // return {
  //   user: '',
  //   authToken: null,
  // };
  return {
    user: '',
    authToken: cookies.get(STORAGE_KEY.ACCESS_TOKEN),
  };
};
const initialAuthState = getInitialAuthState();

const userReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN: {
      const accessToken = action.payload.id;
      const user = action.payload;

      if (accessToken) {
        cookies.set(STORAGE_KEY.ACCESS_TOKEN, accessToken);
      }
      return {authToken: accessToken, user: user};
    }
    case USER_LOGGED_OUT: {
      cookies.remove(STORAGE_KEY.ACCESS_TOKEN);

      return initialAuthState;
    }

    default:
      return state;
  }
};

export default userReducer;
