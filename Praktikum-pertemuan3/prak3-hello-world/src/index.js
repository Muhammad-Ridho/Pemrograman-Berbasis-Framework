import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateFullComponent from "./container/StateFullComponent";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//praktikum 1
// const Hello = () =>{
//   return <p>Hello</p>
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));

// ======================================================================
// Praktikum 2 - Button
// const e = React.createElement;
// function LikeButton(){
//   return e(
//     'button',
//     {
//       onClick: () => alert('berhasil')
//     },
//     'Like'
//   );
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

//=======================================================================
// praktikum 3 - react component
// stateless component
// function HelloComponent() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>React Component</h2>
//     </div>
//   );
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


//class component / statefull component
// class HelloComponent extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       title: "Hello World",
//       subTitle: "Pemrograman Berbasis Framework"
//     };
//   }

//   render(){
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <h2>{this.state.subTitle}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

//Membuat Props
// ReactDOM.render(<App />, document.getElementById('root'));

//Lifecycle Component
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  changeState() {
    this.setState({ hello: "Geek!" });
  }
  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}
ReactDOM.render(
  <Test />,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
