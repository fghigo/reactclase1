import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBhRcFdRDVOu3WCEinuDr6extsolBaeNU",
  authDomain: "mi-tienda-35c4a.firebaseapp.com",
  projectId: "mi-tienda-35c4a",
  storageBucket: "mi-tienda-35c4a.appspot.com",
  messagingSenderId: "67741995443",
  appId: "1:67741995443:web:0e2cc3814b2b3d9a2d3bc6"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
