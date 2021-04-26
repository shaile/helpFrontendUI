/* eslint-disable linebreak-style */
import {
  Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const ProfilePicture = ({ avatar }) => (
  <Avatar
    src={`${avatar}`}
    sx={{
      height: 100,
      width: 100
    }}
  />
);

ProfilePicture.propTypes = {
  avatar: PropTypes.string
};

export default ProfilePicture;
