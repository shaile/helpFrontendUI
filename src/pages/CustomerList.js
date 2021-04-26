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
  function handleTitleChange(e) {
    setSearchText(e.target.value);
  }

  const getUserList = async () => {
    const userList = await fetchUsers(searchText);
    setCustomers(userList);
  };
  useEffect(() => {
    getUserList();
  }, [searchText]);
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
          <CustomerListToolbar onTitleChange={handleTitleChange} searchText={searchText} />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
