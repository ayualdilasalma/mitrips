/**
 *
 * Header
 *
 */

import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import navigations from './navigations';

function Header(props) {
  const navArray = [];
  Object.keys(navigations).forEach(key => {
    navArray.push({
      id: key,
      config: navigations[key],
    });
  });

  const navigationItems = navArray.map(item => (
    <NavItem key={item.id}>
      <NavLink>{item.config.name}</NavLink>
    </NavItem>
  ));

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>mitrip</NavbarBrand>
        <NavbarToggler onClick={props.toggle} />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navigationItems}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
