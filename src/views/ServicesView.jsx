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
  const [filters] = React.useState({
    service_type: 'instalacion',
  });

  return (
    <Container>
      <Announcement />
      <Title>{filters.type}</Title>
      <Services filters={filters} />
      <Footer />
    </Container>
  );
}

export default ServicesView;
