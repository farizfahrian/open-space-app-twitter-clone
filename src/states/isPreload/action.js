/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

import api from '../../api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD'
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setIsPreloadActionCreator(null));
      console.error(error);
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export { setIsPreloadActionCreator, asyncPreloadProcess, ActionType };