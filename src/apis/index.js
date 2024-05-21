import axios from 'axios';
const apiCall = (method, endpoint, data = null, headers = null, baseUrl = null) => {
    axios.defaults.baseURL = baseUrl ? baseUrl : process.env.NEXT_PUBLIC_API_URL;
    const url = `${endpoint}`;
    return axios({
      method,
      url,
      data,
      headers,
    });
  };
  
  export default apiCall;
  