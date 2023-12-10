import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { store, persistor } from 'components/redux/store.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/rent-cars-app">
         <App /> 
        </BrowserRouter>
      {/* </PersistGate> */}
     {/* </Provider> */}
   
  </React.StrictMode>
);
