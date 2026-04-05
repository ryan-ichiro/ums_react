import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';
import dayjs from 'dayjs';

axios.defaults.baseURL = 'http://localhost:8080/UMS'
axios.defaults.headers.post["Content-Type"] = 'application/json'

dayjs.locale('en')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

)