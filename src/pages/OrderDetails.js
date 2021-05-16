/* eslint-disable linebreak-style */
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { fetchOrderById } from 'src/services/OrderService';
import { useParams } from 'react-router';
import OrderDetailCard from 'src/components/order/OrderDetailCard';

const OrderDetails = () => {
  const { oid } = useParams();
  const [details, setOrderDetails] = useState([]);

  const getOrders = async () => {
    let data;
    if (oid) {
      data = await fetchOrderById(oid);
    }
    setOrderDetails(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Helmet>
        <title>Order | Help My Assignment</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="false">
          <OrderDetailCard details={details} />
        </Container>
      </Box>
    </>
  );
};

export default OrderDetails;
