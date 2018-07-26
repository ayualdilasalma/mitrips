/**
 *
 * CreateTrip
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateTrip from './selectors';
import reducer from './reducer';
import saga from './saga';
import Content from './Content';

/* eslint-disable react/prefer-stateless-function */
export class CreateTrip extends React.Component {
  state = {
    name: '',
    startDate: '',
    endDate: '',
    budget: '',
    dateTimeline: '',
    timelineArray: [],
    timeTimeline: '',
    activity: '',
    showTimeTimeline: false,
    showDateTimeline: true,
    temporaryTimeline: [],
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTimeline = this.addTimeline.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.stopAddActivity = this.stopAddActivity.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  addActivity() {
    console.log(this.state.timeTimeline);
    console.log(this.state.activity);
    console.log(this.state.temporaryTimeline);
  }

  addTimeline() {
    const timelines = [];
    timelines.push({
      [this.state.dateTimeline]: {},
    });
    this.setState({
      temporaryTimeline: timelines,
    });
    this.setState({
      showTimeTimeline: true,
      showDateTimeline: false,
    });
  }

  handleSubmit(event) {
    console.log(this.state.startDate);
    event.preventDefault();
  }

  stopAddActivity() {
    this.setState({
      showTimeTimeline: false,
      showDateTimeline: true,
    });
  }

  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Trip Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="budger">Budget</Label>
            <Input
              type="text"
              name="budget"
              id="budger"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          {this.state.showDateTimeline ? (
            <div className="timeline-container">
              <FormGroup>
                <Label for="dateTimeline">Timeline</Label>
                <Input
                  type="date"
                  name="dateTimeline"
                  id="dateTimeline"
                  placeholder=""
                  onChange={this.handleChange}
                />
                <Button onClick={this.addTimeline}>Add Timeline</Button>
              </FormGroup>
            </div>
          ) : null}
          {this.state.showTimeTimeline ? (
            <div className="timepicker">
              <FormGroup>
                <Label for="time">Timeline</Label>
                <Input
                  type="time"
                  name="timeTimeline"
                  id="time"
                  placeholder=""
                  onChange={this.handleChange}
                />
                <Input
                  type="text"
                  name="activity"
                  id="activity"
                  placeholder=""
                  onChange={this.handleChange}
                />
                <Button onClick={this.addActivity}>Add Timeline</Button>
                <Button onClick={this.stopAddActivity}>Finish</Button>
              </FormGroup>
            </div>
          ) : null}
          <FormGroup check row>
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </Content>
    );
  }
}

CreateTrip.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createtrip: makeSelectCreateTrip(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'createTrip', reducer });
const withSaga = injectSaga({ key: 'createTrip', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateTrip);
