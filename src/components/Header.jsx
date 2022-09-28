/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
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

function Header({ user, setUser }) {
  const getUser = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    return userData;
  };

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          break;
        default:
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, [setUser]);

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
              <Username>{user.username}</Username>
              <Button onClick={() => Auth.signOut()}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => Auth.federatedSignIn()}>Login</Button>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;
