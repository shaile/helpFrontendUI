/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint linebreak-style: ["error", "windows"] */
import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const OrderListResults = ({ ordersData, ...rest }) => {
  const { page, limit, handlePageChange, handleLimitChange } = rest;
  const { docs: orders, totalDocs } = ordersData;
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = orders.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          {orders && orders.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === orders.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0 &&
                        selectedCustomerIds.length < orders.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Topic</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Document Type</TableCell>
                  <TableCell>Academic Level</TableCell>
                  <TableCell>Dead Line</TableCell>
                  <TableCell>Order Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.slice(0, limit).map((customer) => (
                  <TableRow
                    hover
                    key={customer._id}
                    selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedCustomerIds.indexOf(customer._id) !== -1
                        }
                        onChange={(event) => handleSelectOne(event, customer._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Typography color="textPrimary" variant="body1">
                          {customer.topic}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      {customer.subject}
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      {customer.documentType}
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      {customer.academicLevel}
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      {customer.deadLine}
                    </TableCell>
                    <TableCell
                      component={Link}
                      to={`/app/order/${customer._id}/`}
                    >
                      {moment(customer.createdOn).format('DD-MM-YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </PerfectScrollbar>
      {totalDocs && (
        <TablePagination
          component="div"
          count={totalDocs}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[2, 3, 5]}
        />
      )}
    </Card>
  );
};

OrderListResults.propTypes = {
  ordersData: PropTypes.array.isRequired
};

export default OrderListResults;
