import { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'

const Header = () => {
  return (
    <div>
      <Navbar className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Button>
            <a className="navbar-brand" href="/">SUBHRAJYOTI</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#myCarousel">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
