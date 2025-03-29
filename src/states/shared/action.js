import api from '../../utils/api';
import { receiveTalksActionCreator } from '../talks/action';
import { receiveUsersActionCreator } from '../users/action';

/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */
function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    try {
      const users = await api.getUsers();
      const talks = await api.getTalks();
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveTalksActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndTalks };