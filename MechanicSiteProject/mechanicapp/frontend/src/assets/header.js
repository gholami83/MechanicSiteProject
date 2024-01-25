import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from  "../assets/images/logo1.png";


function Header() {
  return (
    // <nav class="navbar navbar-expand-lg navbar-brand  bg-dark  m-0 p-2">
    //   <a class="navbar-brand text-danger fw-bold ">Mechanic Site</a>
    //   <Button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </Button>

    //   <div class="collapse navbar-collapse p-2 bg-info " id="navbarSupportedContent">
    //     <ul class="navbar-nav mr-auto">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="/">
    //           Home{" "}
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="/signup">
    //           SignUp
    //         </a>
    //       </li>
    //       <li class="nav-item active">
    //         <a class="nav-link" href="/login">
    //           Login
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="/about">
    //           About
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
      <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Mechanic Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-4">
          <Nav.Link className="" href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/about"> About </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default function HeaderComponent() {
  return (
    <>
      <Header />
    </>
  );
}
