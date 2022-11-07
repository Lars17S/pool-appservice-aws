/* eslint-disable react/prop-types */
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Info = styled.div`
  opacity: .6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: block;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 85%;
  width: 90%;
  object-fit: cover;
  z-index: 2;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  bottom: 30px;
  right: 50%;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Name = styled.h1`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

const Description = styled.p`
  width: 60%;
  display: flex;
  text-align: justified;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

function InstallationItem({
  id, image, name, description,
}) {
  return (
    <Container>
      <Circle />
      <Image src={image} />
      <Info>
        <Name>
          Servicio:
          {name}
        </Name>
        <Description>{description}</Description>
        <Icon>
          <Link to="/orderinstallation" state={{ serviceId: id }}>
            <ScheduleSendIcon />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
}

export default InstallationItem;
