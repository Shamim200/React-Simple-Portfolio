import { lazy, Suspense } from "react";
// use react router dom
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
// use react boostrap
import { Navbar, Nav, Container } from "react-bootstrap";

// react logo icons
import { SiMongodb } from "react-icons/si";

// react pages

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Skills = lazy(() => import("../pages/Skills"));
const Contact = lazy(() => import("../pages/Contact"));
const Error = lazy(() => import("../pages/Error"));

import DarkMode from "./DarkMode";
import Loading from "./Loading";

const Navigation = () => {
  const obj = [
    {
      title: "home",
      links: "/",
    },
    {
      title: "about",
      links: "/about",
    },
    {
      title: "service",
      links: "/service",
    },
    {
      title: "skills",
      links: "/skills",
    },

    {
      title: "contact",
      links: "/contact",
    },
  ];
  return (
    <BrowserRouter>
      <Navbar bg="info" expand="sm">
        <Container fluid className="mx-3">
          <Navbar.Brand as={Link} to="/">
            <img src="./vite.svg" alt="vite logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {obj.map((val, ind) => {
                const { title, links } = val;

                return (
                  <Nav.Link
                    key={ind}
                    as={NavLink}
                    className="text-capitalize"
                    to={links}
                  >
                    {title}
                  </Nav.Link>
                );
              })}
            </Nav>

            <DarkMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
