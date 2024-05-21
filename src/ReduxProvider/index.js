'use client'
import React from "react"
import {Provider} from 'react-redux'; 
import store from '../redux/store';
import axios from 'axios';
import {setupAxios} from '../utils/utils';
setupAxios(axios, store);
const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default ReduxProvider;