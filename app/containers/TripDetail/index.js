/**
 *
 * TripDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Col,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';

import beaches from '!file-loader?name=[name].[ext]!../../images/nusapenida.jpg';
import profpic from '!file-loader?name=[name].[ext]!../../images/profpict.jpg';

import injectSaga from 'utils/injectSaga';
import { formatNumber } from 'utils/helper';
import injectReducer from 'utils/injectReducer';
import Spinner from 'components/Spinner/index';
import Profile from 'components/TripItem/Profile';

import {
  selectLoadingTrip,
  selectErrorTrip,
  selectTripItem,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Content from './Content';
import { loadDataAction, onAddDataAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class TripDetail extends React.Component {
  state = {
    modal: false,
  };

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.onAddParticipants = this.onAddParticipants.bind(this);
  }

  componentDidMount() {
    const { match, onLoadData } = this.props;
    const { params } = match;
    const { id } = params;
    onLoadData(id);
  }

  componentWillReceiveProps(nextProps) {
    const { match, onLoadData } = this.props;
    if (match.params.id !== nextProps.match.params.id) {
      window.scrollTo(0, 0);
      onLoadData(nextProps.match.params.id);
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onAddParticipants() {
    this.props.onAddData();
  }

  render() {
    const { error, loading, trip } = this.props;
    let content;
    if (loading) {
      content = <Spinner />;
    }
    if (error) {
      content = <Alert color="danger">{error}</Alert>;
    }
    if (trip) {
      const { name, tripper, budget, participants, schedules } = trip;
      const timelines = schedules.map(schedule => (
        <TimelineEvent
          title={schedule.activity}
          createdAt={moment(schedule.time).format('hh:mm')}
        />
      ));
      const participantList = participants.map(participant => {
        if (participant) {
          return (
            <img
              key={participant.email}
              src={
                participant.photoUrl != null ? participant.photoUrl : profpic
              }
              alt=""
            />
          );
        }
        return null;
      });
      content = (
        <Content>
          <Col lg={8}>
            <h1>{name}</h1>
            <h5>
              By <span>{tripper.name}</span>
            </h5>
            <img src={beaches} alt="" />
          </Col>
          <Col lg={4}>
            <div className="button-container">
              <button onClick={this.toggle} className="btn btn-join">
                JOIN NOW
              </button>
              <h6>for {formatNumber(String(budget))}</h6>
            </div>
            <div className="timeline-container">
              <Timeline>{timelines}</Timeline>
            </div>
            <div className="participant-container">{participantList}</div>
          </Col>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>Are you sure want to join this trip?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.onAddParticipants}>
                I'm sure
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Content>
      );
    }
    return (
      <Col lg={12}>
        <Helmet>
          <title>TripDetail</title>
          <meta name="description" content="Description of TripDetail" />
        </Helmet>
        {content}
      </Col>
    );
  }
}

TripDetail.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  onAddData: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  loading: PropTypes.any,
  error: PropTypes.any,
  trip: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoadingTrip(),
  error: selectErrorTrip(),
  trip: selectTripItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadData: id => dispatch(loadDataAction(id)),
    onAddData: () => dispatch(onAddDataAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tripDetail', reducer });
const withSaga = injectSaga({ key: 'tripDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TripDetail);
