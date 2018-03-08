import { combineReducers } from 'redux';

import currentTimeReducer from './currentTime';
import currentUserReducer from './currentUser';

import portfolioReducer from './portfolio';

export default combineReducers({
  time: currentTimeReducer,
  user: currentUserReducer,
  portfolio: portfolioReducer,
});
