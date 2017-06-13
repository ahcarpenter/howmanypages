import React from 'react';

import { Link } from 'react-router';
import logo from './logo.svg'
import Wrapper from './Wrapper'
import { Jumbotron, Button, InputGroup, Input, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

function Header(props) {
  return (
    <Wrapper hidden={props.headerHidden}>
      <Navbar color="faded">
        <NavbarBrand href="/"><img src={logo} height="30" alt="logo" /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <Button color="primary" outline>Home</Button>
              </Link>
              {' '}
              <Link to="/about">
                <Button color="primary">About</Button>
              </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </Wrapper>
  );
}

export default Header;
