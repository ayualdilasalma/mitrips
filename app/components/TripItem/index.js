/**
 *
 * TripItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
// import styled from 'styled-components';

function TripItem(props) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <h2>{props.title}</h2>
    </Col>
  );
}

TripItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TripItem;
