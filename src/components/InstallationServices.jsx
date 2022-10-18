import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from 'aws-amplify';
import { listInstallationServices } from '../graphql/queries';
import InstallationItem from './InstallationItem';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function InstallationServices() {
  const [services, setServices] = useState([]);

  async function fetchServices() {
    const apiData = await API.graphql({ query: listInstallationServices });
    const servicesFromAPI = apiData.data.listInstallationServices.items;
    setServices(servicesFromAPI);
  }

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Container>
      {services.map((item) => (
        <InstallationItem id={item.id} image={item.image} key={item.id} name={item.name} description={item.description} />
      ))}
    </Container>
  );
}

export default InstallationServices;
