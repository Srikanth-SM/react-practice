import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function Welcome(props) {
  return <h1>Welcome {props.name}</h1>
}
function App(props) {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )

}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.state.time = new Date();
  }

  componentDidMount() {
    this.timerId = setInterval(() => { this.tick() }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div>
        <h1> {this.state.time.toLocaleTimeString()}</h1>
      </div>

    )
  }
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //this is necessary if handleClick is passed as callback(i.e onClick={this.handleClick})
    this.handleClick = this.handleClick.bind(this);
    //the above is not neccessary if it is directly called inside a callback(i.e onclick= {() => this.handleClick()})
  }

  handleClick() {
    var that = this;
    console.log(this);
    this.setState(function () {
      console.log(this === that)
      return { isToggleOn: !this.state.isToggleOn }
    });
  }

  render() {
    return (
      // <button onClick={() => { this.handleClick() }}>
      //   {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;

}



function LoginButton(props) {
  console.log(props)
  return (

    < div >
      login
    <button onClick={props.click}>
        Login
      </button>
    </div >
  )
}

function LogoutButton(props) {
  console.log(props.click)
  return (

    < div >
      logout
    <button onClick={props.click}>
        Logout
      </button>
    </div >
  )
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: props.isLoggedIn };
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);

  }
  handleLoginClick() {
    console.log("Inside handleLoginClick");
    this.setState((state) => ({
      isLoggedIn: true
    }))

  }

  handleLogoutClick() {
    console.log("Inside handleLogoutClick");
    console.log(this)
    this.setState((state) => ({
      isLoggedIn: false
    }))
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton click={() => { this.handleLogoutClick() }} />
    }
    else {
      button = <LoginButton click={() => { this.handleLoginClick() }} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
export { App, Time, ActionLink, Toggle, LoginControl, Greeting };
