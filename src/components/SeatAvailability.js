import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/index';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
const SeatUnaImg = styled.img`
  height: 17px;
  width: 17px;
  opacity: 0.5;
`;
const SeatOpen = styled.div`
  flex: 1;
  background-color: ${props => (props.isSelected ? '#ffffff' : '#5DADE2')};
  border: ${props => (props.isSelected ? '4px solid gold' : 'none')};
  border-radius: 4px;
  &:hover {
    background-color: #6cbbf7;
  }
`;
const SeatPremPref = styled.div`
  flex: 1;
  background-color: ${props => (props.isSelected ? '#ffffff' : '#58d68d')};
  border: ${props => (props.isSelected ? '4px solid gold' : 'none')};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => (props.isSelected ? '#D5D8DC' : '#5eba7d')};
  }
`;
const SeatTaken = styled.div`
  flex: 1;
  background-color: #717d7e;
  border-radius: 4px;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SeatPPImg = styled.img`
  height: 17px;
  width: 17px;
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
    getFlightInfo: () => dispatch(actionCreator.getFlightInfo()),
    selectSeat: pram => dispatch(actionCreator.selectSeat(pram)),
    changeFlight: pram => dispatch(actionCreator.changeFlight(pram))
  };
};
class SeatAvailability extends Component {
  constructor(props) {
    super(props);

    this.isRegOrPrem = this.isRegOrPrem.bind(this);
  }

  isRegOrPrem = data => {
    const seat = data;
    if (seat.availability === 'available') {
      if (!seat.preferred) {
        return (
          <SeatOpen
            onClick={() => this.props.selectSeat(seat.code)}
            isSelected={this.props.selected && this.props.selected[seat.code]}
          ></SeatOpen>
        );
      }
      if (seat.preferred === true) {
        return (
          <SeatPremPref
            onClick={() => this.props.selectSeat(seat.code)}
            isSelected={this.props.selected && this.props.selected[seat.code]}
          >
            <SeatPPImg src="https://img.icons8.com/ios-filled/50/000000/star.png" />
          </SeatPremPref>
        );
      }
    } else {
      return (
        <SeatTaken>
          <SeatUnaImg
            src={'https://img.icons8.com/ios-filled/50/000000/x.png'}
          />
        </SeatTaken>
      );
    }
  };
  render() {
    const data = this.props.code;
    return <Wrapper>{this.isRegOrPrem(data)}</Wrapper>;
  }
}
export default connect(mapStateToProps, mapDispachToProps)(SeatAvailability);
