import apiCall from '../../apis';
import {API_METHOD} from '../../constants/application.constant';

export const AuthApi = {
    signup: (payload) => {
        const endpoint = `/users`;
        return apiCall(API_METHOD.POST, endpoint, payload);
    },
    getUsers:() => {
        const endpoint = `/users`;
        return apiCall(API_METHOD.GET, endpoint, payload);
    },
    login :(queryString) => {
        const endpoint = `/users?${queryString}`;
        return apiCall(API_METHOD.GET, endpoint);
    },
    getUser :(id) => {
        const endpoint = `/users/${id}`;
        return apiCall(API_METHOD.GET, endpoint);
    },
    getUserByEmail : (email) => {
        const endpoint = `/users?email=${email}`;
        return apiCall(API_METHOD.GET, endpoint);
    }
}