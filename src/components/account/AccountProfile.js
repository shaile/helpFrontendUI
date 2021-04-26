/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint linebreak-style: ["error", "windows"] */
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { uploadProfilePic } from 'src/services/CustomerService';
import ProfilePicture from './ProfilePicture';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const AccountProfile = ({ user, onChange }) => {
  const imagePath = process.env.REACT_APP_UPLOAD_URL;
  const classes = useStyles();

  const [file, setFile] = useState('');
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [isUpdated, setIsUpdated] = useState('');
  const [details, setDetails] = useState('');

  const handleUploadFile = (e) => {
    setFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const { profilePic, updatedOn } = await uploadProfilePic(formData);
      console.log('**88888888888888888888888,', user);
      user.avatar.filename = profilePic;
      onChange(user);
      setIsUpdated(updatedOn);
      setDetails(user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setDetails(user);
    console.log('file', isUpdated);
  }, [user, isUpdated]);

  return (
    <Card {...user}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <ProfilePicture avatar={`${imagePath}${details.avatar && details.avatar.filename}`} />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user && user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${(user.address && user.address.city) ? user.address.city : 'N/A'}
             ${(user.address && user.address.country) ? user.address.country : 'N/A'}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          name="file"
          onChange={handleUploadFile}
        />
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={handleSubmit}
          disabled={!isFilePicked}
        >
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
