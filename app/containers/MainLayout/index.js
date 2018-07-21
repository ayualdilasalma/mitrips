/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Container } from 'reactstrap';

import Header from 'components/Header/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainLayout from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>MainLayout</title>
          <meta name="description" content="Description of MainLayout" />
        </Helmet>
        <Header toggle={this.toggle} isOpen={this.state.isOpen} />
        <Row>{this.props.children}</Row>
      </Container>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainlayout: makeSelectMainLayout(),
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

const withReducer = injectReducer({ key: 'mainLayout', reducer });
const withSaga = injectSaga({ key: 'mainLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainLayout);
