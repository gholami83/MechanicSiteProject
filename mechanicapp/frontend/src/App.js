import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderComponent from "./assets/header";
import FooterComponent from "./assets/footer"
import HomeComponent from "./components/home";
import SignUpFormComponent from "./components/signup";
import LogInFormComponent from "./components/login";
import AboutComponent from "./components/about";
import NotFoundComponent from "./components/notfound";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={ <HomeComponent /> }/>
        <Route path="/signup" element={ <SignUpFormComponent/> }/>
        <Route path="/login" element={ <LogInFormComponent/> }/>
        {/* <Route path="/user" Component={ User }></Route> */}
        <Route path="/about" element={ <AboutComponent/> }/>
        <Route path="*" element={ <NotFoundComponent/> }/>

      </Routes>

      <FooterComponent />
    </Router>
  );
}

export default App;
