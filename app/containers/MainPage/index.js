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

import Spinner from 'components/Spinner/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { selectLoading, makeSelectMainPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadDataStart } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const { loading } = this.props;
    let content;
    if (loading) {
      content = <Spinner />;
    }
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        {content}
      </div>
    );
  }
}

MainPage.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  loading: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage(),
  loading: selectLoading(),
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
