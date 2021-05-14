/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint linebreak-style: ["error", "windows"] */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import { Link } from 'react-router-dom';

const CustomerListResults = ({ customersData, ...rest }) => {
  const rowsPerPageOptions = process.env.REACT_APP_ROW_PER_PAGE;
  const { page, limit, handlePageChange, handleLimitChange } = rest;
  const { docs: customers, totalDocs, nextPage } = customersData;
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
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
          {customers && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === customers.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0 &&
                        selectedCustomerIds.length < customers.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.slice(0, limit).map((customer) => (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedCustomerIds.indexOf(customer.id) !== -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, customer.id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {customer.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>
                      {`${
                        customer.address && customer.address.city
                          ? customer.address.city
                          : 'N/A'
                      },
                     ${
                       customer.address && customer.address.state
                         ? customer.address.state
                         : 'N/A'
                     },
                     ${
                       customer.address && customer.address.country
                         ? customer.address.country
                         : 'N/A'
                     }`}
                    </TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>
                      {moment(customer.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <Typography
                        component={Link}
                        to={`/app/orders/${customer._id}/`}
                        key={customer._id}
                      >
                        Orders
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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

CustomerListResults.propTypes = {
  customersData: PropTypes.object.isRequired
};

export default CustomerListResults;
