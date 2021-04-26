/* eslint-disable linebreak-style */
import { createContext } from 'react';

const UserContext = createContext({
  myDetails: {},
  setMyDetails: () => {}
});
export default UserContext;
