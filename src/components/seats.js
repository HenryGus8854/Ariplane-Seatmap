import React, { Component } from 'react';
import styled from 'styled-components';
import First from './First';
import PremEconomy from './PremEconomy';
import Economy from './Economy';
import { SEGMENTS, SEATMAPS } from '../data/data';

function getCarrierIcon(code) {
  return `https://wf-deploy-assets.whereto.com/airlines/${code}.png`;
}

const Div = styled.div`
  width: 1100px;
  height: 900px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
`;
const Div1 = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 2px solid black;
  margin: 10px;
  border-radius: 9px;
`;

const Div2 = styled.div`
  flex: 8;
  background-color: #ffffff;
  margin: 5px;
  display: flex;
  border-radius: 9px;
  flex-direction: column;
`;
const SegmentsW = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const Segment = styled.div`
  height: 100%;
  width: 260px;
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: #3498db;
  color: white;
`;
const Div3 = styled.div`
  flex: 7;
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const Div4 = styled.div`
  flex: 5;
  background-color: #e5e7e9;
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
`;
const Div5 = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid black;
  margin: 5px;
  border-radius: 9px;
`;
const Div6 = styled.div`
  flex: 1;
  background-color: #e5e7e9;
  border: 1px solid black;
  margin: 5px;
  border-radius: 9px;
`;
const Div7 = styled.div`
  flex: 4;
  background-color: #e5e7e9;
  border: 1px solid black;
  margin: 5px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
`;
const Div8 = styled.div`
  flex: 3;
  border: 1px solid black;
  margin: 5px;
  border-radius: 9px;
  overflow: scroll;
  display: flex;
  flex-direction: row;
`;

const FirstClassW = styled.div`
  flex: 3;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;
const PEconomyW = styled.div`
  flex: 2;
  border-radius: 9px;
`;
const EconomyW = styled.div`
  flex: 7;
  border-radius: 9px;
`;
const BracketW = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
const BracketFirst = styled.div`
  flex: 3;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;
const BracketPrem = styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;
const BracketEcomony = styled.div`
  flex: 7;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;
const BracketText = styled.span`
  font-size: 100%;
`;
const Bracket = styled.div`
  height: 40px;
  width: 100%;
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-radius: 6px;
`;

class SeatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: ''
    };
  }

  render() {
    return (
      <Div>
        <Div1>
          <h1>Please choose your seats for your flights:</h1>
        </Div1>
        <Div2>
          <SegmentsW>
            <Segment></Segment>
            <Segment></Segment>
          </SegmentsW>
          <Div3>
            <Div4>
              <Div6></Div6>
              <Div7>
                <BracketW>
                  <BracketFirst>
                    <BracketText>First</BracketText>
                    <Bracket />
                  </BracketFirst>
                  <BracketPrem>
                    <BracketText>Premium Economy</BracketText>
                    <Bracket />
                  </BracketPrem>
                  <BracketEcomony>
                    <BracketText>Economy</BracketText>
                    <Bracket />
                  </BracketEcomony>
                </BracketW>
                <Div8>
                  <FirstClassW>
                    <First />
                  </FirstClassW>
                  <PEconomyW>
                    <PremEconomy />
                  </PEconomyW>
                  <EconomyW>
                    <Economy />
                  </EconomyW>
                </Div8>
              </Div7>
            </Div4>
            <Div5></Div5>
          </Div3>
        </Div2>
      </Div>
    );
  }
}

export default SeatList;
