/**
 *
 * TripItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import Image from './Img';

function TripItem(props) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Image src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
    </Col>
  );
}

TripItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default TripItem;
