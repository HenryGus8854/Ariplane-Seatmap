import React, { Component } from 'react';
import styled from 'styled-components';
import Rows from './rows';
import * as actionCreator from '../store/actions/index';
import { connect } from 'react-redux';

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
`;
const SectionW = styled.div`
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
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.div`
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
    getFlightInfo: () => dispatch(actionCreator.getFlightInfo()),
    selectSeat: pram => dispatch(actionCreator.selectSeat(pram)),
    changeFlight: pram => dispatch(actionCreator.changeFlight(pram))
  };
};
class SeatMap extends Component {
  componentDidMount(e) {}
  componentWillUnmount() {}
  render() {
    const section = this.props.flightInfo.seatmaps[this.props.seatMapNum]
      .seatmap.sections;
    return (
      <Wrapper>
        {this.props.loaded ? (
          <Back>
            {section.map(sects => (
              <SectionW key={sects.label}>
                <SeatLetters>
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
                <Rows code={sects} />
              </SectionW>
            ))}
          </Back>
        ) : (
          <Wrapper>
            <Loading />
          </Wrapper>
        )}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(SeatMap);
