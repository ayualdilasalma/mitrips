/**
 *
 * TripItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import profpic from '!file-loader?name=[name].[ext]!../../images/profpict.jpg';
import moment from 'moment';
import { formatNumber } from 'utils/helper';

import { Wrapper, RowWrapper } from './Wrapper';
import Image from './Img';
import Content from './Title';
import Profile from './Profile';

function TripItem(props) {
  const {
    image,
    title,
    author,
    participants,
    startDate,
    endDate,
    budget,
  } = props;
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
      <Content>
        <h4>{title}</h4>
        <p>
          by <span>{author}</span>
        </p>
        <h6>{formatNumber(String(budget))}</h6>
        <h6>{moment(startDate).format('DD MMM YYYY')}</h6>
        <RowWrapper>{participantList}</RowWrapper>
      </Content>
    </Wrapper>
  );
}

TripItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string,
  participants: PropTypes.array,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  budget: PropTypes.string,
};

export default TripItem;
