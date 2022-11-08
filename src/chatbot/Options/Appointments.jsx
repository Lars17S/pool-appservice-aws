/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { API, Auth } from 'aws-amplify';
import { listInstallationOrders } from '../../graphql/queries';
import { deleteInstallationOrder, updateInstallationOrder } from '../../graphql/mutations';

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
    <div>
      <h4>Estas son tus citas</h4>
      {orders.map((row) => (
        <div>
          <div>
            <p>{row.serviceId}</p>
            <p>{row.address}</p>
            <p>{row.appointmentDate}</p>
          </div>
          {row.appointmentStatus !== 'CONFIRMED' ? (
            <div>
              <Button
                variant="contained"
                color="error"
                endIcon={<CancelIcon />}
                onClick={() => {
                  deleteOrder(row.id).then(getOrders());
                }}
              />
              <Button
                variant="contained"
                color="success"
                endIcon={<CheckIcon />}
                onClick={() => {
                  confirmOrder(row.id).then(getOrders());
                }}
              />
            </div>
          )
            : (
              <Button
                variant="contained"
                color="error"
                endIcon={<CancelIcon />}
                onClick={() => {
                  deleteOrder(row.id).then(getOrders());
                }}
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default ProfileView;
