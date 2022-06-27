import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { loadSearchResults } from "../Dashboard/dashboardSlice";

function Header() {
  const dispatch = useDispatch();
  const [searchTerm, setsearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadSearchResults(searchTerm));
    setsearchTerm("");
  };

  return (
    <Navbar bg="dark">
      <Container fluid>
        <Col>
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
                position: "relative",
                top: "15px",
              }}
            >
              Reddit-Client
            </h1>
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link>
              <span style={{ fontSize: "1em", color: "White" }}>
                <FontAwesomeIcon icon={faHome} /> Home
              </span>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={6}>
          <Nav.Item>
            <Form className="searchBar" onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Row}>
                  <Col xs={8}>
                    <Form.Control
                      type="text"
                      placeholder="Search a post"
                      value={searchTerm}
                      onChange={(e) => {
                        setsearchTerm(e.currentTarget.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <Button type="submit">Search</Button>
                  </Col>
                </Form.Group>
              </Row>
            </Form>
          </Nav.Item>
        </Col>
        <Col style={{ display: "flex", justifyContent: "right" }}>
          <Nav.Item className="justify-content-center">
            <Nav.Link className="justify-content-center"></Nav.Link>
          </Nav.Item>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Header;
