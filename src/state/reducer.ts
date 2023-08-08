import { combineReducers } from 'redux';

import user from './user/reducer';
import todo from './todo/reducer';

const reducers = combineReducers({
  user,
  todo,
});

export default reducers;
