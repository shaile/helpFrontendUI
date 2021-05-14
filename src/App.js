/* eslint linebreak-style: ["error", "windows"] */
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { currentUser } from 'src/services/CustomerService';
import useToken from './auth/useToken';
import UserContext from './utils/UserContext';

const App = () => {
  const [myDetails, setMyDetails] = useState('');
  const value = { myDetails, setMyDetails };

  const getMyDetails = async () => {
    const cUser = await currentUser();
    return cUser;
  };
  useEffect(() => {
    async function fetchData() {
      const response = await getMyDetails();
      setMyDetails(response);
    }
    fetchData();
  }, []);
  const routing = useRoutes(routes(useToken()));
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserContext.Provider value={value}>{routing}</UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
