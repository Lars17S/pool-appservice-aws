/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { API, Auth } from 'aws-amplify';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { listInstallationOrders } from '../graphql/queries';
import { deleteInstallationOrder, updateInstallationOrder } from '../graphql/mutations';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const Invisible = styled.span`
opacity: 0.0;`;

function ProfileView() {
  const [orders, setOrders] = useState([]);

  async function getUserId() {
    try {
      const userInfo = await Auth.currentUserInfo();
      return userInfo.id;
    } catch {
      return null;
    }
  }

  const deleteOrder = async (id) => {
    const order = {
      id,
    };
    await API.graphql({
      query: deleteInstallationOrder,
      variables: { input: order },
    });
  };

  const confirmOrder = async (id) => {
    const order = {
      id,
      appointmentStatus: 'CONFIRMED',
    };
    await API.graphql({
      query: updateInstallationOrder,
      variables: { input: order },
    });
  };

  async function getOrders() {
    const userId = await getUserId();
    const filter = {
      userId: {
        eq: String(userId), // filter priority = 1
      },
    };
    const apiData = await API.graphql({
      query: listInstallationOrders,
      variables: { filter },
    });
    const ordersFromAPI = apiData.data.listInstallationOrders.items;
    setOrders(ordersFromAPI);
  }

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Container>
      <Announcement />
      <Title>Perfil</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo de cita</TableCell>
              <TableCell align="right">Número telefónico</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">Fecha de la cita</TableCell>
              <TableCell align="right">Estatus</TableCell>
              <TableCell align="right"><Invisible>Cancelar</Invisible></TableCell>
              <TableCell align="right"><Invisible>Modificar</Invisible></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.serviceId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {'Servicio'}
                </TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{new Date(row.appointmentDate).toDateString()}</TableCell>
                <TableCell align="right">{row.appointmentStatus}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    endIcon={<CancelIcon />}
                    onClick={() => {
                      deleteOrder(row.id).then(getOrders());
                    }}
                  >
                    Cancelar
                  </Button>
                </TableCell>
                <TableCell align="right">
                  {row.appointmentStatus === 'CONFIRMED' ? (
                    <Button
                      variant="contained"
                      color="success"
                      disabled
                      endIcon={<CheckIcon />}
                    >
                      Confirmar
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="success"
                      endIcon={<CheckIcon />}
                      onClick={() => {
                        confirmOrder(row.id).then(getOrders());
                      }}
                    >
                      Confirmar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </Container>
  );
}

export default ProfileView;
