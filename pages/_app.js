import "@/styles/globals.css";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reloader from '../reducers/reloader';
import file from '../reducers/file';
import modal from '../reducers/modal';

const store = configureStore({
	reducer: { reloader,file,modal },
});

export default function App({ Component, pageProps }) {

  return ( 
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  
  )
}
