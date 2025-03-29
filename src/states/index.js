/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './states/authUser/reducer';
import { isPreloadReducer } from './states/isPreload/reducer';
import { usersReducer } from './states/users/reducer';
import { talksReducer } from './states/talks/reducer';
import { talkDetailReducer } from './states/talkDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
  },
});

export default store;