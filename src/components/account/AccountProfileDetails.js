/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint linebreak-style: ["error", "windows"] */
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { updateUser } from 'src/services/CustomerService';

const AccountProfileDetails = ({ user, onChange }) => {
  const { name, email, phone } = user;
  const { address } = user;
  const [values, setValues] = useState('');
  const [addr, setAddrr] = useState('');
 
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAddress = (e) => {
    setAddrr({
      ...addr,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    const updates = {
      ...user, name: values.name, phone: values.phone, address: addr 
    };
    console.log('Vo phr nahi aate', user);
    await updateUser(updates);
    onChange(updates);
  };

  useEffect(() => {
    setValues({ name, email, phone });
    setAddrr(address);
  }, [user]);

  return (
    <form
      autoComplete="off"
      noValidate
      {...user}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the name"
                label="First name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={values.email}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Phone Number"
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleAddress}
                required
                value={addr && addr.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleAddress}                
                value={addr && addr.state}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select City"
                name="city"
                onChange={handleAddress}
                required
                value={addr && addr.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the street home address"
                label="street"
                name="street"
                onChange={handleAddress}
                required
                value={addr && addr.street}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
