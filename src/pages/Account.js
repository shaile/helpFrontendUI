/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import { useEffect, useState, useContext } from 'react';
import UserContext from 'src/utils/UserContext';

const Account = () => {
  const { myDetails: details, setMyDetails } = useContext(UserContext);
  const [user, setUser] = useState('');
  const handleChange = (updatedUser) => {
    setMyDetails(updatedUser);
  };

  useEffect(() => {
    setUser(details);
  }, [details]);

  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile user={user} onChange={handleChange} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails user={user} onChange={handleChange} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
