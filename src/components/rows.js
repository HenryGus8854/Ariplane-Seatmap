import React, { Component } from 'react';
import styled from 'styled-components';
import SeatAvailability from './SeatAvailability';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
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
const Nothing = styled.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
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
const Mapped = styled.div`
  flex: 1;
  border-radius: 4px;
`;
const TextNum = styled.span`
  font-size: 130%;
`;

class Rows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const coffee = 'https://img.icons8.com/ios-glyphs/30/000000/coffee.png';
    const toilet = 'https://img.icons8.com/wired/64/000000/toilet.png';
    const sects = this.props.code;
    return (
      <Wrapper>
        {sects.rows.map((model, index) => (
          <RowContainer key={index}>
            <Li>
              <Div2>
                {model.elements.map(sub => (
                  <Mapped key={sub.code}>
                    <SeatDiv>
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
                        (sub.type && sub.type === 'seat' && (
                          <SeatAvailability code={sub} />
                        ))}
                    </SeatDiv>
                  </Mapped>
                ))}
              </Div2>
            </Li>
          </RowContainer>
        ))}
      </Wrapper>
    );
  }
}
export default Rows;
