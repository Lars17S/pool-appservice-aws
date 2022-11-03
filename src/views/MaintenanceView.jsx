import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import InstallationServices from '../components/InstallationServices';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

function MaintenanceView() {
  return (
    <Container>
      <Announcement />
      <Title>Servicios de mantenimiento disponibles</Title>
      <InstallationServices />
      <Footer />
    </Container>
  );
}

export default MaintenanceView;
