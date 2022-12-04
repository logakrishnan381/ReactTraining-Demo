import ReactDOM from 'react-dom/client';
import './index.css';
import State from './state';

import reportWebVitals from './reportWebVitals';
import React from 'react';
import Eventbind from './event';
import FormDemo from './FormDemo.jS';


/////import ClassStateDemo from'./toggle';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State/>
    <Eventbind/>
    <FormDemo/>

    
    
    
   
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
