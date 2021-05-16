/* eslint-disable linebreak-style */
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import { fetchUsers } from 'src/services/CustomerService';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function handleTitleChange(e) {
    setSearchText(e.target.value);
  }

  const getUserList = async () => {
    const userList = await fetchUsers(searchText, page, limit);
    setCustomers(userList);
  };
  useEffect(() => {
    getUserList();
  }, [searchText, limit, page]);
  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar
            onTitleChange={handleTitleChange}
            searchText={searchText}
          />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults
              customersData={customers}
              handleLimitChange={handleLimitChange}
              handlePageChange={handlePageChange}
              page={page}
              limit={limit}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
