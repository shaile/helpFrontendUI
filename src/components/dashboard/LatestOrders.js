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
  CircularProgress,
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

const LatestOrders = (props) => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const { docs: data } = await fetchOrders('', 0, 5);
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
              {(orders &&
                orders.length > 0) ?
                orders.map((order) => (
                  <TableRow hover key={order.id}>
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
                )) : <CircularProgress />}
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
