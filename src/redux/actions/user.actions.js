export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const userLoggedIn = (loginResponse) => {
  return {
    type: USER_LOGGED_IN,
    payload: loginResponse,
  };
};

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
