import "@/styles/globals.css";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reloader from '../reducers/reloader';
import file from '../reducers/file';
import modal from '../reducers/modal';
import entity from '../reducers/entity';
import editmode from '../reducers/editmode'
import AuthProvider from "../hooks/AuthProvider";
const store = configureStore({
	reducer: { reloader,file,modal,entity,editmode },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['addFile'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.0'],
        // Ignore these paths in the state
        ignoredPaths: ['file'],
      },
    }),
});

export default function App({ Component, pageProps }) {

  return ( 
    <AuthProvider>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </AuthProvider>
  )
}
