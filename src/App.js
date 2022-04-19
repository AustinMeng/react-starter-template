import logo from "./logo.svg";
import "./App.css";
import React, {useContext} from "react"
import CButton from "./CButton";
import FButton from "./FButton";
import Greeting from "./Greeting";
import Counter from "./Counter";
import Login from "./Login";
import Users from "./Users"
import { Route, Link } from "react-router-dom";
import {GlobalContext} from "./GlobalContext";

function App() {
  const {gLoginId} = useContext(GlobalContext);
  const [globalLoginId, setGlobalLoginId] = gLoginId;

  const {gLoginFlg} = useContext(GlobalContext);
  const [globalLoginFlg, setGlobalLoginFlg] = gLoginFlg;

  function approve() {
    console.log("approve button is clicked");
  }

  function reject() {
    console.log("reject button is clicked");
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h3>Hi {globalLoginId}, Welcome to React JS session</h3>
      {/*<CButton></CButton>
      <FButton title="Approve" bgColor="green" textColor="white" action={approve}></FButton>
      <FButton title="Reject" bgColor="red" textColor="white" action={reject}></FButton>
      <FButton />
      <Greeting></Greeting>
      <Counter ></Counter>
      <Login ></Login> */}
      {
        globalLoginFlg?
          <div>
              <Link to="/counter/5">Counter</Link>&nbsp;
              <Link to="/greeting">Greeting</Link>&nbsp;
              <Link to="/users">Users</Link>
          </div>
          :
          <div>
              <Link to="/login">Login</Link>&nbsp;
          </div>   
      }
      {
        globalLoginFlg?
          <div>
            <Route exact path="/" component={Greeting} />
            <Route path="/counter/:id?" component={Counter} />
            <Route path="/greeting" component={Greeting} />
            <Route path="/users" component={Users} />
          </div>
          :
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
          </div>   
      }
    </div>
  );
}

export default App;
