import {STORAGE_KEY} from '../constants/application.constant'
import {toggleLoadding} from '../redux/actions/global.actions'
export function setupAxios(axios, store, baseUrl) {
    axios.defaults.baseURL = baseUrl;
    axios.interceptors.request.use(
      (config) => {
        const {dispatch} = store;
        dispatch(toggleLoadding(true));
        const {
          auth: {authToken},
        } = store.getState();
        // if (authToken) {
        //   config.headers = {
        //     Authorization: `Bearer ${authToken}`,
        //   };
        // }
        return config;
      },
      (err) => Promise.reject(err)
    );
  
    axios.interceptors.response.use(
      (response) => {
        const {dispatch} = store;
        dispatch(toggleLoadding(false));
  
        if (response && response.data) {
          return response.data;
        }
        return response;
      },
      (error) => {
        console.error(error);
        const {dispatch} = store;
        dispatch(toggleLoadding(false));
        // Handle error
        // if (error && error.response) {
        //   switch (error.response.status) {
        //     case BAD_REQUEST:
        //       toast.error(error.response.data, {
        //         position: 'top-center',
        //       });
        //       break;
  
        //     case UN_AUTHORIZED:
        //       localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
        //       window.location.href = APPLICATION_PATHS.LOGIN;
        //       break;
  
        //     case NOT_FOUND:
        //       toast.error('Could not make request to ' + error?.request?.responseURL);
        //       break;
  
        //     case 500:
        //       const errorMessage = (error?.response?.data ?? '').substring(0, 255);
        //       toast.error(errorMessage);
        //       break;
  
        //     default:
        //       break;
        //   }
        // }
        return Promise.reject(error);
      }
    );
  }
  