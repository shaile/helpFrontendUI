/* eslint linebreak-style: ["error", "windows"] */
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import PropTypes from 'prop-types';

const OrderListToolbar = ({ searchText, onTitleChange }) => (
  <Box {...searchText}>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search Order"
              variant="outlined"
              value={searchText}
              onChange={onTitleChange}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

OrderListToolbar.propTypes = {
  searchText: PropTypes.string,
  onTitleChange: PropTypes.func
};
export default OrderListToolbar;
