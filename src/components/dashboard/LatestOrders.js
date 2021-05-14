/* eslint-disable operator-linebreak */
/* eslint linebreak-style: ["error", "windows"] */
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect, useState } from 'react';
import { fetchOrders } from 'src/services/OrderService';
import { Link } from 'react-router-dom';

// const orders = [
//   {
//     id: uuid(),
//     ref: 'CDD1049',
//     amount: 30.5,
//     customer: {
//       name: 'Ekaterina Tankova'
//     },
//     createdAt: 1555016400000,
//     status: 'pending'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1048',
//     amount: 25.1,
//     customer: {
//       name: 'Cao Yu'
//     },
//     createdAt: 1555016400000,
//     status: 'delivered'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1047',
//     amount: 10.99,
//     customer: {
//       name: 'Alexa Richardson'
//     },
//     createdAt: 1554930000000,
//     status: 'refunded'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1046',
//     amount: 96.43,
//     customer: {
//       name: 'Anje Keizer'
//     },
//     createdAt: 1554757200000,
//     status: 'pending'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1045',
//     amount: 32.54,
//     customer: {
//       name: 'Clarke Gillebert'
//     },
//     createdAt: 1554670800000,
//     status: 'delivered'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1044',
//     amount: 16.76,
//     customer: {
//       name: 'Adam Denisov'
//     },
//     createdAt: 1554670800000,
//     status: 'delivered'
//   }
// ];

const LatestOrders = (props) => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const data = await fetchOrders('');
    setOrders(data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Card {...props}>
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Topic</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.length > 0 &&
                orders.map((order) => (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.topic}</TableCell>
                    <TableCell>{order.subject}</TableCell>
                    <TableCell>
                      {moment(order.createdOn).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <Chip
                        color="primary"
                        label={order.status ? 'delivered' : 'pending'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          component={Link}
          to="/app/orders"
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestOrders;
