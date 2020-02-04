import React, { Component } from 'react';
import styled from 'styled-components';
import SeatAvailability from './SeatAvailability';

const getColumns = section =>
  section.rows[0].elements.reduce((acc, col) => {
    acc.push(col.type === 'aisle' ? col : col.code.split('-')[1]);
    return acc;
  }, []);

const Back = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e7e9;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SectionW = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CenterW = styled.div`
  flex: 1;
  display: flex;
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

const Nothing = styled.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const Mapped = styled.div`
  flex: 1;
  border-radius: 4px;
`;
const TextNum = styled.span`
  font-size: 130%;
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

class SeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectable: {},
      seatMapNum: 0
    };
    this.addSeat = this.addSeat.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }
  componentDidMount() {
    this.addSeat();
  }

  componentWillUnmount() {}

  changeSelect = info => {
    const seat = info;
    this.setState(prevState => ({
      selectable: {
        ...prevState.selectable,
        [seat]: !prevState.selectable[seat]
      }
    }));
  };

  addSeat = () => {
    const seatState = {};
    const sections = this.props.state.seatmap.sections;
    let i;
    for (i = 0; i < sections.length; ) {
      const row = sections[i].rows;
      i++;
      let j;
      for (j = 0; j < row.length; ) {
        const element = row[j].elements;
        let k;
        for (k = 0; k < element.length; ) {
          const seat = element[k];
          if (seat.type === 'seat' && seat.availability === 'available') {
            seatState[seat.code] = false;
            k++;
          } else {
            k++;
          }
        }
        j++;
      }
    }
    this.setState({
      selectable: {
        ...seatState
      }
    });
    console.log(seatState);
  };

  render() {
    const coffee = 'https://img.icons8.com/ios-glyphs/30/000000/coffee.png';
    const toilet = 'https://img.icons8.com/wired/64/000000/toilet.png';
    const Section = this.props.state.seatmap.sections;
    return (
      <Back>
        {Section.map(sects => (
          <SectionW key={sects.label}>
            <SeatLetters key={sects.label}>
              {getColumns(sects).map((col, index) => (
                <SeatDiv key={index}>
                  <CenterW>
                    {typeof col === 'string' ? (
                      <TextNum>{col}</TextNum>
                    ) : (
                      <Nothing />
                    )}
                  </CenterW>
                </SeatDiv>
              ))}
            </SeatLetters>
            {sects.rows.map((model, index) => (
              <RowContainer key={index}>
                <Li key={index}>
                  <Div2 key={index}>
                    {model.elements.map(sub => (
                      <Mapped key={sub.code}>
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
                            (sub.type && sub.type === 'seat' && (
                              <SeatAvailability
                                state={this.state.selectable}
                                change={this.changeSelect}
                                code={sub}
                              />
                            ))}
                        </SeatDiv>
                      </Mapped>
                    ))}
                  </Div2>
                </Li>
              </RowContainer>
            ))}
          </SectionW>
        ))}
      </Back>
    );
  }
}

export default SeatMap;
