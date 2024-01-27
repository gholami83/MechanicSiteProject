import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo1.png";
import Icon from './icon';
import { ThemeContext } from './icon';
function Header({ isLoggedIn }) {
  return (
    <Navbar expand="lg" className=" ">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Mechanic Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="/">Home</Nav.Link>
            {!isLoggedIn ? (
              // Links to show when user is not logged in
              <>
                <Nav.Link href="/signup">Sign up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            ) : (
              // Link to show when user is logged in
              <Nav.Link href="/mechines">Mechines</Nav.Link>
            )}
            <Nav.Link href="/about">About</Nav.Link>
            <Icon/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default function HeaderComponent(isLoggedIn) {
 // This function could be called when the user logs out

 return (
    <>
      <Header isLoggedIn={isLoggedIn} />
    </>
 );
}