import React from 'react';
import styled from 'styled-components';
import SeatList from './components/seats';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/index';

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f3f4;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const mapStateToProps = state => {
  return {
    selected: state.selected,
    seatMapNum: state.seatMapNum,
    flightInfo: state.flightInfo,
    loaded: state.loaded
  };
};
const mapDispachToProps = dispatch => {
  return {
    getFlightInfo: () => dispatch(actionCreator.requestFlightInfo()),
    selectSeat: pram => dispatch(actionCreator.selectSeat(pram)),
    changeFlight: pram => dispatch(actionCreator.changeFlight(pram))
  };
};

function App() {
  return (
    <Div>
      <SeatList />
    </Div>
  );
}

export default connect(mapStateToProps, mapDispachToProps)(App);
