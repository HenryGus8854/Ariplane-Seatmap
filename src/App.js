import React from 'react';
import styled from 'styled-components';
import SeatList from './components/seats';

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f3f4;
  justify-content: center;
  align-items: center;
  display: flex;
`;

function App() {
  return (
    <Div>
      <SeatList />
    </Div>
  );
}

export default App;
