/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import { Auth } from 'aws-amplify';
import { Button } from '@mui/material';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile} {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile} {
    padding: 0px 5px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${tablet} {
    flex: 0;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile} {
    display: none;
  }
  ${tablet} {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile} {
    justify-content: flex-start;
    flex: 4;
    transform: scale(0.8);
  }
  ${tablet} {
    justify-content: flex-end;
    flex: 1;
  }
`;

const Username = styled.h4`
  ${tablet} {
    display: none;
  }
`;

function Header({ user }) {
  return (
    <Container>
      <Wrapper>
        <Left />
        <Center>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
            <Logo>Pool AppService</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
              <Username>{user.attributes.email}</Username>
              <Link to="/appointment">
                <Button>Citas</Button>
              </Link>
              <Button onClick={() => Auth.signOut()}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => Auth.federatedSignIn()}>Login</Button>
          )}
          <Link to="/installation">
            <Button>Instalaciones</Button>
          </Link>
          <Link to="/maintenance">
            <Button>Mantenimiento</Button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;
