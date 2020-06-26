import React from "react";
import { Link } from "react-router-dom";
 
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

const Navigation = ({ likeList, blockList }) => {
  let numLike = likeList.length;
  let numBlock = blockList.length;
  let style = {
    color: "white",
    fontSize: "large",
    textDecoration: "none"
  };

  return (
    <Navbar collapseOnSelect expand="md lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link style={style} to="/">
          Logo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link style={style} to="/movie">
              Movie List
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={style} to="/like">
              Like List: {numLike}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={style} to="/block">
              Block List: {numBlock}
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
