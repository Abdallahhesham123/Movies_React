import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import AuthContextProvider from './Context/Store';
import MediaContextProvider from './Context/MediaContextStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<AuthContextProvider>
<MediaContextProvider>

<App />

</MediaContextProvider>


</AuthContextProvider>



  </React.StrictMode>
);

