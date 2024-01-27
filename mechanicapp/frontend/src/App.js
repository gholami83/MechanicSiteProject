import React,{ useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import HeaderComponent from "./assets/header";
import FooterComponent from "./assets/footer"
import HomeComponent from "./components/home";
import SignUpFormComponent from "./components/signup";
import LogInFormComponent from "./components/login";
import AboutComponent from "./components/about";
import NotFoundComponent from "./components/notfound";
import MechinesComponent from "./components/mechines-list";
import MechineComponent from "./components/Mechine";
import CarComponent from "./components/car";
import ServiceComponent from "./components/service";
import AdminComponent from "./components/admin";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if a token exists in local storage
    return localStorage.getItem('token');
 });
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  // const navigate = useNavigate();

    // const handleLogout = () => {
    //   setIsLoggedIn(false);
    //   localStorage.removeItem('token'); // Remove the token from local storage
    //   navigate('/')
    // }
  return (
    <Router>
       <HeaderComponent isLoggedIn={isLoggedIn} />
       <Routes>
        
             <Route path="/" element={ <HomeComponent /> }/>
             <Route path="/mechines" element={ <MechinesComponent/> }/>
             <Route path="/mechines/:mechineId" element={ <MechineComponent/> }/>
             {/* <Route path="/logout" element={ <LogOutPage onLogout={handleLogout} /> }/> */}
             <Route path="/signup" element={ <SignUpFormComponent onLoginSuccess={handleLogin} />  }/>
             <Route path="/car" element={ <CarComponent/>  }/>
             <Route path="/service" element={ <ServiceComponent/>  }/>
             <Route path="/admin" element={ <AdminComponent/>}/>
             <Route path="/login" element={ <LogInFormComponent onLoginSuccess={handleLogin} /> }/>
             <Route path="/about" element={ <AboutComponent/> }/>
         <Route path="*" element={ <NotFoundComponent/> }/>
       </Routes>
       <FooterComponent />
    </Router>
   );
}

export default App;
