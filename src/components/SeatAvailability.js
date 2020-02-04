import React, { Component } from 'react';
import styled from 'styled-components';

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
  background-color: ${props => (props.selected ? '#ffffff' : '#5DADE2')};
  border: ${props => (props.selected ? '4px solid gold' : 'none')};
  border-radius: 4px;
  &:hover {
    background-color: #6cbbf7;
  }
`;
const SeatPremPref = styled.div`
  flex: 1;
  background-color: ${props => (props.selected ? '#ffffff' : '#58d68d')};
  border: ${props => (props.selected ? '4px solid gold' : 'none')};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => (props.selected ? '#D5D8DC' : '#5eba7d')};
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
class SeatAvailability extends Component {
  constructor(props) {
    super(props);

    this.isRegOrPrem = this.isRegOrPrem.bind(this);
  }

  isRegOrPrem = info => {
    const seat = info;
    if (seat.availability === 'available') {
      if (seat.preferred === undefined) {
        return (
          <SeatOpen
            onClick={() => this.props.change(seat.code)}
            selected={this.props.state[seat.code] ? true : false}
          ></SeatOpen>
        );
      }
      if (seat.preferred === true) {
        return (
          <SeatPremPref
            onClick={() => this.props.change(seat.code)}
            selected={this.props.state[seat.code] ? true : false}
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
export default SeatAvailability;
