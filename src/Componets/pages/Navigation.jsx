import React from "react";

// use react router dom
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
// use react boostrap
import { Navbar, Nav, Container } from "react-bootstrap";

// react logo icons
import { SiMongodb } from "react-icons/si";

// react pages
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Skills from "./Skills";
import Contact from "./Contact";
import Error from "./Error";

import DarkMode from "../DarkMode";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar bg="info" expand="sm">
        <Container fluid className="mx-3">
          <Navbar.Brand as={Link} to="/">
            <SiMongodb />
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={NavLink} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <DarkMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
