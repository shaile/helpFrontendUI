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

// eslint-disable-next-line react/prop-types
const CustomerListToolbar = ({ searchText, onTitleChange }) => (
  <Box {...searchText}>
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        Import
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Button
        color="primary"
        variant="contained"
      >
        Add customer
      </Button>
    </Box> */}
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
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
export default CustomerListToolbar;
