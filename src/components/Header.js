import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
//import {ReactComponent as }

function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            style={{ maxWidth: "12rem", maxHeight: "4rem" }}
            alt={"Logo"}
          />{" "}
          <h1
            style={{
              color: "white",
              display: "inline",
              height: "100%",
              position:'relative',
              top: "15px",
            }}
          >
            Reddit-Client
          </h1>
        </Navbar.Brand>
        <Nav.Link>Home</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
