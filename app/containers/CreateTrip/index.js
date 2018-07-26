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
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Row,
  Alert,
} from 'reactstrap';

import Spinner from 'components/Spinner/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  selectLoadingCreate,
  selectStatusCreate,
  selectErrorCreate,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Content from './Content';
import * as actions from './actions';

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
    const temporaryTimeline = this.state.temporaryTimeline;

    temporaryTimeline.push({
      time: this.state.timeTimeline,
      activity: this.state.activity,
    });

    //  console.log(temporaryTimeline);

    this.setState({
      temporaryTimeline,
      timeTimeline: '',
      activity: '',
    });

    // console.log(this.state.timeTimeline);
    // console.log(this.state.activity);
    // console.log(this.state.temporaryTimeline);
  }

  addTimeline() {
    // const timelines = [];
    // timelines.push({
    //   [this.state.dateTimeline]: {},
    // });
    // this.setState({
    //   temporaryTimeline: timelines,
    // });
    this.setState({
      showTimeTimeline: true,
      showDateTimeline: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      tripper: {
        name: 'Fidelis',
        userId: '-',
      },
      startDate: this.state.startDate,
      budget: this.state.budget,
      name: this.state.name,
      participants: [],
      endDate: this.state.endDate,
      schedules: this.state.timelineArray,
    };
    //  console.log(data);
    this.props.onCreateData(data);
    this.setState({
      endDate: '',
      startDate: '',
      name: '',
      budget: '',
      timelineArray: [],
    });
  }

  stopAddActivity() {
    const timelineArray = this.state.timelineArray;

    timelineArray.push({
      [this.state.dateTimeline]: this.state.temporaryTimeline,
    });

    console.log(timelineArray);

    this.setState({
      showTimeTimeline: false,
      showDateTimeline: true,
      timelineArray,
      temporaryTimeline: [],
      dateTimeline: '',
    });
  }

  render() {
    const { loading, success, error } = this.props;
    if (loading) {
      return (
        <Content>
          <Spinner />
        </Content>
      );
    }

    return (
      <Content>
        {success ? <Alert color="info">{success}</Alert> : null}
        {error ? <Alert color="danger">{error}</Alert> : null}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Trip Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="budger">Budget</Label>
            <Input
              type="text"
              name="budget"
              id="budget"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.budget}
            />
          </FormGroup>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input
                  type="date"
                  name="startDate"
                  id="startDate"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.startDate}
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input
                  type="date"
                  name="endDate"
                  id="endDate"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.endDate}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              {this.state.showDateTimeline ? (
                <div className="timeline-container">
                  <FormGroup>
                    <Label for="dateTimeline">Timeline</Label>
                    <Row>
                      <Col lg={4}>
                        <Input
                          type="date"
                          name="dateTimeline"
                          id="dateTimeline"
                          placeholder=""
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Button onClick={this.addTimeline}>Add Timeline</Button>
                    </Row>
                  </FormGroup>
                </div>
              ) : null}
              {this.state.showTimeTimeline ? (
                <div className="timepicker">
                  <FormGroup>
                    <Label for="time">Timeline</Label>
                    <Row>
                      <Col lg={3}>
                        <Input
                          type="time"
                          name="timeTimeline"
                          id="time"
                          placeholder=""
                          onChange={this.handleChange}
                          value={this.state.timeTimeline}
                        />
                      </Col>
                      <Col lg={9}>
                        <Input
                          type="text"
                          name="activity"
                          id="activity"
                          placeholder=""
                          onChange={this.handleChange}
                          value={this.state.activity}
                        />
                      </Col>
                      <Col className="btn-group-activity">
                        <Button onClick={this.addActivity}>Add Activity</Button>
                        <Button onClick={this.stopAddActivity}>Finish</Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
              ) : null}
            </Col>
            {this.state.showTimeTimeline ? (
              <Col>
                <h1>Timeline for {this.state.dateTimeline}</h1>
                {/* eslint-disable */
                this.state.temporaryTimeline.length > 0
                  ? this.state.temporaryTimeline.map(item => (
                      <div key={item.activity}>
                        <p>{`${item.time} ${item.activity} `}</p>
                      </div>
                    ))
                  : null}
              </Col>
            ) : null}
          </Row>
          <FormGroup check row>
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </Content>
    );
  }
}

CreateTrip.propTypes = {
  onCreateData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  success: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoadingCreate(),
  success: selectStatusCreate(),
  error: selectErrorCreate(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCreateData: data => dispatch(actions.onCreateAction(data)),
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
