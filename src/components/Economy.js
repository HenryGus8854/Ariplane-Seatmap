import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
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

const SeatTaken = styled.div`
  flex: 1;
  background-color: #717d7e;
  border-radius: 4px;
`;
const TextNum = styled.span`
  font-size: 130%;
  margin-left: 2px;
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
const Div6 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;
const Div7 = styled.div`
  height: 30px;
  background-color: #e5e7e9;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  margin: 2px;
`;

class Economy extends Component {
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
          <SeatDiv>
            <TextNum>F</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div1>
        <Div2>
          <SeatDiv>
            <TextNum>E</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div2>
        <Div3>
          <SeatDiv>
            <TextNum>D</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div3>
        <Div4>
          <SeatDiv></SeatDiv>
          <SeatDiv>
            <TextNum>13</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>14</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>15</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>16</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>17</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>18</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>19</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>20</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>21</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>22</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>23</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>24</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>25</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>26</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>27</TextNum>
          </SeatDiv>
          <SeatDiv>
            <TextNum>28</TextNum>
          </SeatDiv>
        </Div4>
        <Div5>
          <SeatDiv>
            <TextNum>C</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div5>
        <Div6>
          <SeatDiv>
            <TextNum>B</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div6>
        <Div7>
          <SeatDiv>
            <TextNum>A</TextNum>
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
          <SeatDiv>
            <SeatTaken />
          </SeatDiv>
        </Div7>
      </Div>
    );
  }
}

export default Economy;
