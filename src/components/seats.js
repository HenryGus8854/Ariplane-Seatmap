import React, { Component } from 'react';
import styled from 'styled-components';
import First from './First';
import PremEconomy from './PremEconomy';
import Economy from './Economy';
import { SEGMENTS, SEATMAPS } from '../data/data';
import moment from 'moment';

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
const SegmentW = styled.div`
  display: flex;
  margin: 3px;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
`;
const TextNum = styled.span`
  font-size: 130%;
`;
const Div5 = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid black;
  margin: 15px;
  border-radius: 9px;
`;
const Div6 = styled.div`
  flex: 1;
  background-color: #e5e7e9;
  border: 1px solid black;
  margin: 5px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
`;
const LegendW = styled.div`
  display: flex;
  flex-direction: row;
  flex: 7;
  margin: 1px;
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const LegendWBot = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  margin: 1px;
  border: 1px solid black;
`;
const PlaneInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-right: 2px;
`;
const Legend = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-right: 2px;
  align-items: center;
  justify-content: center;
`;
const Div7 = styled.div`
  flex: 3;
  background-color: #e5e7e9;
  margin: 5px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
`;
const Div8 = styled.div`
  flex: 2;
  margin: 5px;
  border-radius: 9px;
  overflow-x: scroll;
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
  display: flex;
  flex-direction: column;
`;
const BracketPrem = styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 2px;
  display: flex;
  flex-direction: column;
`;
const BracketEcomony = styled.div`
  flex: 7;
  align-items: center;
  justify-content: center;
  padding: 2px;
  display: flex;
  flex-direction: column;
`;
const BracketText = styled.span`
  font-size: 100%;
`;
const Bracket = styled.div`
  height: 40px;
  width: 90%;
  border-left: 2px solid grey;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-radius: 9px;
`;
const Img = styled.img`
  max-height: 50px;
  max-width: 50px;
`;
const SeatDiv = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
  display: flex;
`;
const SeatOpen = styled.div`
  flex: 1;
  background-color: #5dade2;
  border-radius: 4px;
`;
const SeatTaken = styled.div`
  flex: 1;
  background-color: #717d7e;
  border-radius: 4px;
  opacity: 0.7;
`;
function getSegment() {
  const flights = SEGMENTS;
  return flights;
}
function getSeatmap() {
  const details = SEATMAPS;
  return details;
}

class SeatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: ''
    };
  }

  render() {
    const flightInfo = getSegment();
    const flightDetails = getSeatmap();
    console.log(flightInfo);
    return (
      <Div>
        <Div1>
          <h1>Please choose your seats for your flights:</h1>
        </Div1>
        <Div2>
          <SegmentsW>
            {flightInfo.map((flights, index) => (
              <Segment key={index}>
                <SegmentW>
                  <TextNum>
                    {flights.departure.airport}+{flights.arrival.airport}
                  </TextNum>
                  <TextNum>
                    {moment(flights.departure.datetime).format(
                      'MMMM Do YYYY, h:mm a'
                    )}
                  </TextNum>
                  <TextNum>Flight No: {flights.flightNumber}</TextNum>
                </SegmentW>
              </Segment>
            ))}
          </SegmentsW>
          <Div3>
            <Div4>
              <Div6>
                {flightDetails.map((flight, index) => (
                  <LegendW>
                    <Img src={getCarrierIcon(flight.seatmap.carrier.code)} />
                    <PlaneInfo>
                      <TextNum>{flight.seatmap.carrier.name}</TextNum>
                      <TextNum>{flight.seatmap.aircraftType}</TextNum>
                    </PlaneInfo>
                    <Legend>
                      <SeatDiv>
                        <SeatOpen></SeatOpen>
                      </SeatDiv>
                    </Legend>
                  </LegendW>
                ))}
                <LegendWBot></LegendWBot>
              </Div6>
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
