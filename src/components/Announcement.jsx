import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
      <h1> </h1>
    </Container>
  );
}

export default Announcement;
