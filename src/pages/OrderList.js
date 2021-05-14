import { Helmet } from 'react-helmet';
// eslint-disable-next-line object-curly-newline
import { Box, Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CustomerCard from 'src/components/customer/CustomerCard';
import { fetchOrders, fetchOrderByUserId } from 'src/services/OrderService';
import { fetchUserById } from 'src/services/CustomerService';
import CircularUnderLoad from 'src/utils/circularUnderLoad';
import OrderListToolbar from 'src/components/order/OrderListToolbar';
import OrderListResults from 'src/components/order/OrderListResults';
import { useParams } from 'react-router';

const OrderList = () => {
  const { userId } = useParams();
  const [user, setUser] = useState('');
  const [orders, setOrders] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  function handleTitleChange(e) {
    setSearchText(e.target.value);
  }

  const handlePageChange = async (event, newPage) => {
    console.log(event, 'wwwww');
    setPage(newPage);
  };

  const handleLimitChange = async (event) => {
    setLimit(event.target.value);
  };

  const getOrders = async () => {
    let data;
    if (userId) {
      const myDetails = await fetchUserById(userId);
      setUser(myDetails);
      data = await fetchOrderByUserId(userId);
    } else {
      data = await fetchOrders(searchText, page, limit);
    }
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
    console.log('#############', limit);
  }, [userId, limit]);

  return (
    <>
      <Helmet>
        <title>Order | Help My Assignment</title>
      </Helmet>
      <Box
        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              {user && (
                <CustomerCard user={{ name: user.name, email: user.email }} />
              )}
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <OrderListToolbar
            onTitleChange={handleTitleChange}
            searchText={searchText}
          />
          <Box sx={{ pt: 12 }}>
            {orders && orders.length > 0 ? (
              <OrderListResults
                orders={orders}
                handlePageChange={handlePageChange}
                handleLimitChange={handleLimitChange}
                page={page}
                limit={limit}
              />
            ) : (
              <CircularUnderLoad />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrderList;
