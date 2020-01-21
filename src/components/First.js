import React, { Component } from 'react';
import styled from 'styled-components';

const Back = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e7e9;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SeatDiv = styled.div`
  height: 25px;
  width: 25px;
  margin: 3px;
  display: flex;
`;
const Img = styled.img`
  max-height: 25px;
  max-width: 25px;
`;
const SeatTaken = styled.div`
  flex: 1;
  background-color: #717d7e;
  border-radius: 4px;
`;
const TextNum = styled.span`
  font-size: 130%;
  margin-left: 8px;
`;
const Div1 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;

const Div2 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  display: flex;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;
const Div3 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;
const Div4 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;
const Div5 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: ''
    };
  }

  render() {
    return (
      <Back>
        <Div1>
          <SeatDiv>
            <TextNum>D</TextNum>
          </SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png" />
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png" />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div1>
        <Div2>
          <SeatDiv>
            <TextNum>C</TextNum>
          </SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png" />
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png" />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div2>
        <Div3>
          <SeatDiv></SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <TextNum>1</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>2</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>3</TextNum>
          </SeatDiv>
        </Div3>
        <Div4>
          <SeatDiv>
            <TextNum>B</TextNum>
          </SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/wired/64/000000/toilet.png" />
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div4>
        <Div5>
          <SeatDiv>
            <TextNum>A</TextNum>
          </SeatDiv>
          <SeatDiv>
            <Img src="https://img.icons8.com/wired/64/000000/toilet.png" />
          </SeatDiv>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div5>
      </Back>
    );
  }
}

export default First;
