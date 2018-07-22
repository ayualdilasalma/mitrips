/**
 *
 * TripItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import profpic from '!file-loader?name=[name].[ext]!../../images/profpict.jpg';

import { Wrapper, RowWrapper } from './Wrapper';
import Image from './Img';
import Title from './Title';
import Profile from './Profile';

function TripItem(props) {
  const { image, title, author, participants } = props;
  let participantList;
  if (participants) {
    participantList = participants.map(participant => {
      if (participant) {
        return (
          <Profile
            key={participant.email}
            src={participant.photoUrl != null ? participant.photoUrl : profpic}
            alt=""
          />
        );
      }
      return null;
    });
  }
  return (
    <Wrapper xs={12} sm={6} lg={4}>
      <Image src={image} alt={title} />
      <Title>
        <h6>{title}</h6>
        <p>
          by <span>{author}</span>
        </p>
      </Title>
      <RowWrapper>{participantList}</RowWrapper>
    </Wrapper>
  );
}

TripItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string,
  participants: PropTypes.array,
};

export default TripItem;
