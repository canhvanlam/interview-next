'use client'
import React from "react"
import {Provider} from 'react-redux'; 
import store from '../redux/store';
import axios from 'axios';
import {setupAxios} from '../utils/utils';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnReconnect: false,
        retry: false,
        cacheTime: 0,
      },
    },
  });
setupAxios(axios, store);
const ReduxProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
        
    )
}
export default ReduxProvider;