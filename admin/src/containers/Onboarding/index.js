/**
 *
 * Onboarding
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import {
  getVideos,
  onClick,
  removeVideos,
  setVideoDuration,
  setVideoEnd,
  updateVideoStartTime,
} from './actions';
import makeSelectOnboarding from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/no-array-index-key */

export class Onboarding extends React.Component {

  render() {
    return (
      <div></div>
    );
  }
}

Onboarding.defaultProps = {
  onClick: () => {},
  removeVideos: () => {},
  setVideoDuration: () => {},
  setVideoEnd: () => {},
  shouldOpenModal: false,
  videos: [],
  updateVideoStartTime: () => {},
};

Onboarding.propTypes = {
  getVideos: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  removeVideos: PropTypes.func,
  setVideoDuration: PropTypes.func,
  setVideoEnd: PropTypes.func,
  shouldOpenModal: PropTypes.bool,
  updateVideoStartTime: PropTypes.func,
  videos: PropTypes.array,
};

const mapStateToProps = makeSelectOnboarding();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getVideos,
      onClick,
      setVideoDuration,
      updateVideoStartTime,
      setVideoEnd,
      removeVideos,
    },
    dispatch
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

/* Remove this line if the container doesn't have a route and
 *  check the documentation to see how to create the container's store
 */
const withReducer = injectReducer({ key: 'onboarding', reducer });

/* Remove the line below the container doesn't have a route and
 *  check the documentation to see how to create the container's store
 */
const withSaga = injectSaga({ key: 'onboarding', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Onboarding);
