// eslint-disable-next-line 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const myElement1= <h1>React is {5 + 5} times better with JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const myElement4 = React.createElement('h1', {}, 'I do not use JSX!'); //JSX 사용하지 않고 만들기 
const myElement5 = (
  <>
  <span className="date">오늘의 날짜 :</span> <input type="text" />
  </>);
const myElement3 = (
  <ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
  </ul>
 );
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // myElement
  

  // myElement3
  <>
  {myElement4}
  {myElement5}
  <div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
