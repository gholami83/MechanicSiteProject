import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-brand  bg-dark  m-0 p-2">
      <a class="navbar-brand text-danger fw-bold ">Mechanic Site</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse p-2 bg-info rounded-3" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">
              SignUp
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/login">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default function HeaderComponent() {
  return (
    <>
      <Header />
    </>
  );
}
