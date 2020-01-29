import React, { Component } from 'react';
import styled from 'styled-components';
import { SEATMAPS } from '../data/data';

const Back = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e7e9;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SeatDiv = styled.div`
  height: 25px;
  width: 25px;
  margin: 2px;
  display: flex;
`;
const Img = styled.img`
  max-height: 25px;
  max-width: 25px;
`;
const SeatOpen = styled.div`
  flex: 1;
  background-color: #5dade2;
  border-radius: 4px;
  &:hover {
    background-color: #000000;
  }
`;
const Nothing = styled.div`
  flex: 1;
  background-color: transparent;
  border-radius: 4px;
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
const Mapped = styled.div`
  flex: 1;
  border-radius: 4px;
`;
const TextNum = styled.span`
  font-size: 130%;
  margin-left: 8px;
`;
const TextNumEcon = styled.span`
  font-size: 130%;
  margin-left: 4px;
`;
const SeatLetters = styled.div`
  background-color: #e5e7e9;
  border-radius: 9px;
  display: flex;
  flex-direction: column-reverse;
`;

const RowContainer = styled.div`
  margin-left: 3px;
  margin-right: 3px;
`;
const Div2 = styled.div`
  flex: 1;
  background-color: #e5e7e9;
  border-radius: 9px;
  display: flex;
  flex-direction: column-reverse;
`;
const Li = styled.li`
  display: flex;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin: 1px;
`;
const SeatUnaImg = styled.img`
  height: 17px;
  width: 17px;
  opacity: 0.5;
`;
const SeatPremPref = styled.div`
  flex: 1;
  background-color: #58d68d;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SeatPPImg = styled.img`
  height: 17px;
  width: 17px;
`;

const SeatSelect = styled.div`
  flex: 1;
  background-color: #f1c40f;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SeatSelInner = styled.div`
  background-color: #ffffff;
  height: 17px;
  width: 17px;
`;

function getSection() {
  const {
    0: {
      seatmap: { sections }
    }
  } = SEATMAPS;
  return sections;
}

class SeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectable: {}
    };
    this.SeatAvailability = this.SeatAvailability.bind(this);
    this.addSeat = this.addSeat.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  componentDidMount() {
    console.log(this.state.selectable);
  }
  componentWillUnmount() {}
  changeSelect = info => {
    const seat = info;
    this.setState(prevState => ({
      selectable: {
        ...prevState.selectable,
        [seat]: true
      }
    }));
  };

  addSeat = info => {
    const seat = info;
    const newSeat = { [seat]: false };
    const state = this.state.selectable;
    Object.assign(state, newSeat);
  };

  SeatAvailability = info => {
    const seat = info;
    switch (seat.availability) {
      default:
        return <Nothing />;
      case 'blocked':
        return (
          <SeatTaken>
            <SeatUnaImg
              src={'https://img.icons8.com/ios-filled/50/000000/x.png'}
            />
          </SeatTaken>
        );
      case 'reserved':
        return (
          <SeatTaken>
            <SeatUnaImg
              src={'https://img.icons8.com/ios-filled/50/000000/x.png'}
            />
          </SeatTaken>
        );
      case 'protected':
        return (
          <SeatTaken>
            <SeatUnaImg
              src={'https://img.icons8.com/ios-filled/50/000000/x.png'}
            />
          </SeatTaken>
        );
      case 'available':
        this.addSeat(seat.code);
        if (seat.preferred === true) {
          return (
            <SeatPremPref onClick={() => this.changeSelect(seat.code)}>
              <SeatPPImg src="https://img.icons8.com/ios-filled/50/000000/star.png" />
            </SeatPremPref>
          );
        } else {
          return (
            <SeatOpen onClick={() => this.changeSelect(seat.code)}></SeatOpen>
          );
        }
    }
  };

  render() {
    const coffee = 'https://img.icons8.com/ios-glyphs/30/000000/coffee.png';
    const toilet = 'https://img.icons8.com/wired/64/000000/toilet.png';
    const Section = getSection();

    return (
      <Back>
        <SeatLetters>
          <SeatDiv>
            <TextNum>A</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>B</TextNum>
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <TextNum>C</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>D</TextNum>
          </SeatDiv>
        </SeatLetters>
        {Section[0].rows.map((model, index) => (
          <RowContainer key={index}>
            <Li key={index}>
              <Div2 key={index}>
                {model.elements.map(sub => (
                  <Mapped key={sub.code} id={sub.code}>
                    <SeatDiv key={sub.code}>
                      {(sub.type && sub.type === 'toilet' && (
                        <Img src={toilet} />
                      )) ||
                        (sub.type && sub.type === 'galley' && (
                          <Img src={coffee} />
                        )) ||
                        (sub.type && sub.type === 'aisle' && (
                          <Nothing>
                            <TextNum>{model.number}</TextNum>
                          </Nothing>
                        )) ||
                        (sub.type &&
                          sub.type === 'seat' &&
                          this.SeatAvailability(sub))}
                    </SeatDiv>
                  </Mapped>
                ))}
              </Div2>
            </Li>
          </RowContainer>
        ))}
        <SeatLetters>
          <SeatDiv>
            <TextNum>A</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>B</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>C</TextNum>
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <TextNum>D</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>E</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>F</TextNum>
          </SeatDiv>
        </SeatLetters>
        {Section[1].rows.map((model, index) => (
          <RowContainer key={index}>
            <Li key={index}>
              <Div2 key={index}>
                {model.elements.map(sub => (
                  <Mapped key={sub.code} id={sub.code}>
                    <SeatDiv key={sub.code}>
                      {(sub.type && sub.type === 'toilet' && (
                        <Img src={toilet} />
                      )) ||
                        (sub.type && sub.type === 'galley' && (
                          <Img src={coffee} />
                        )) ||
                        (sub.type && sub.type === 'aisle' && (
                          <Nothing>
                            <TextNumEcon>{model.number}</TextNumEcon>
                          </Nothing>
                        )) ||
                        (sub.type &&
                          sub.type === 'seat' &&
                          this.SeatAvailability(sub))}
                    </SeatDiv>
                  </Mapped>
                ))}
              </Div2>
            </Li>
          </RowContainer>
        ))}
        <SeatLetters>
          <SeatDiv>
            <TextNum>A</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>B</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>C</TextNum>
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <TextNum>D</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>E</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>F</TextNum>
          </SeatDiv>
        </SeatLetters>
        {Section[2].rows.map((model, index) => (
          <RowContainer key={index}>
            <Li key={index}>
              <Div2 key={index}>
                {model.elements.map(sub => (
                  <Mapped key={sub.code} id={sub.code}>
                    <SeatDiv
                      key={sub.code}
                      onClick={() => this.changeSelect(sub.code)}
                    >
                      {(sub.type && sub.type === 'toilet' && (
                        <Img src={toilet} />
                      )) ||
                        (sub.type && sub.type === 'galley' && (
                          <Img src={coffee} />
                        )) ||
                        (sub.type && sub.type === 'aisle' && (
                          <Nothing>
                            <TextNumEcon>{model.number}</TextNumEcon>
                          </Nothing>
                        )) ||
                        (sub.type &&
                          sub.type === 'seat' &&
                          this.SeatAvailability(sub))}
                    </SeatDiv>
                  </Mapped>
                ))}
              </Div2>
            </Li>
          </RowContainer>
        ))}
      </Back>
    );
  }
}

export default SeatMap;
