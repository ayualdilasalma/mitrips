/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row } from 'reactstrap';

import Spinner from 'components/Spinner/index';
import TripItem from 'components/TripItem/index';
import beaches from '!file-loader?name=[name].[ext]!../../images/nusapenida.jpg';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { selectLoading, makeSelectMainPage, selectTrips } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadDataStart } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const { loading, trips } = this.props;
    let content;
    if (loading) {
      content = <Spinner />;
    } else if (trips) {
      content = trips.map(item => (
        <TripItem
          key={item.name}
          title={item.name}
          image={beaches}
          author={item.tripper.name}
          participants={item.participants}
        />
      ));
    }
    return (
      <Row>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        {content}
      </Row>
    );
  }
}

MainPage.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  loading: PropTypes.any,
  trips: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage(),
  loading: selectLoading(),
  trips: selectTrips(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => dispatch(loadDataStart()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
