/**
 *
 * Header
 *
 */

import React from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';

// import styled from 'styled-components';
import profpic from '!file-loader?name=[name].[ext]!../../images/profpict.jpg';

import Content from './Content';
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
      <NavLink tag={RRNavLink} to={item.config.link}>
        {item.config.name}
      </NavLink>
    </NavItem>
  ));

  return (
    <Content>
      <Container className="top-header">
        <NavbarBrand>mi-trip</NavbarBrand>
        <div className="user-container">
          <img src={profpic} alt="" />
        </div>
      </Container>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarToggler onClick={props.toggle} />
          <Collapse isOpen={props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navigationItems}
            </Nav>
          </Collapse>
          <div className="search-container">
            <RRNavLink to="/create">
              <span>
                <i className="fas fa-plus" />
              </span>
            </RRNavLink>
            <span>
              <i className="fas fa-search" />
            </span>
          </div>
        </Container>
      </Navbar>
    </Content>
  );
}

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
