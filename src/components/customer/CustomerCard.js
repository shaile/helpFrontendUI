/* eslint-disable linebreak-style */
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ProfilePicture from 'src/components/account/ProfilePicture';

const useStyles = makeStyles((theme) => ({
  orderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart'
  },
  avatar: {
    flex: 1,
    border: '1px solid red'
  },
  details: {
    flex: 2,
    padding: '10px',
    marginLeft: '20px',
    boxShadow: '0px 3px #888888'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const CustomerCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.orderContainer}>
        <ProfilePicture avatar="" className={classes.avatar} />
        <Box className={classes.details}>
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
CustomerCard.propTypes = {
  user: PropTypes.object
};
export default CustomerCard;
