import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

function ServicesView() {
  const { state } = useLocation();
  const [filters] = React.useState({
    color: 'rgb',
    type: state,
  });
  const [sort] = React.useState('type');

  return (
    <Container>
      <Announcement />
      <Title>{filters.type}</Title>
      <Services filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
}

export default ServicesView;
