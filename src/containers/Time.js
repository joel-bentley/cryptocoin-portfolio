import React from 'react';
import { connect } from 'react-redux';
import { actions as currentTimeActions } from '../reducers/currentTime';

function Time(props) {
  return (
    <div>
      <h1>Time</h1>
      <p>Current time: {props.currentTime}</p>

      <button onClick={props.updateTime}>Update Time</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTime: state.time.currentTime,
  };
}

function mapDispatchToProps(dispatch) {
  return { updateTime: () => dispatch(currentTimeActions.fetchNewTime()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);
