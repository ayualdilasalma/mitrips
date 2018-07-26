/**
 *
 * TripItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { formatNumber } from 'utils/helper';
/* image */
import beaches from '!file-loader?name=[name].[ext]!../../images/nusapenida.jpg';
import profpic from '!file-loader?name=[name].[ext]!../../images/profpict.jpg';

import { Wrapper, RowWrapper } from './Wrapper';
import Image from './Img';
import Content from './Title';
import Profile from './Profile';

function TripItem(props) {
  const { config } = props;
  const { name, tripper, participants, startDate, budget, id } = config;
  const url = `trip/${id}`;
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
  /* eslint-disable */
  return (
    <Wrapper xs={12} sm={6} lg={4}>
      <Image src={beaches} alt={name} />
      <Content>
        <Link to={url}>
          <h4>{name}</h4>
        </Link>
        <p>
          by <span>{tripper.name}</span>
        </p>
        <h6>{formatNumber(String(budget))}</h6>
        <h6>{moment(startDate).format('DD MMM YYYY')}</h6>
        <RowWrapper>{participantList}</RowWrapper>
      </Content>
    </Wrapper>
  );
}

TripItem.propTypes = {
  config: PropTypes.object,
};

export default TripItem;
