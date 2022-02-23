import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//praktikum
const Hello = () =>{
  return <p>Hello</p>
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// Praktikum B - Button
const e = React.createElement;
function LikeButton(){
  return e(
    'button',
    {
      onClick: () => alert('berhasil')
    },
    'Like'
  );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
