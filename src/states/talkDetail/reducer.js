/**
 * @TODO: Define reducer for the talkDetail state
 */
import { ActionType } from './action';

function talkDetailReducer(talkDetail = null, action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_TALK_DETAIL:
    return action.payload.talkDetail;
  case ActionType.CLEAR_TALK_DETAIL:
    return null;
  case ActionType.TOGGLE_LIKE_TALK_DETAIL:
    return talkDetail.map((talk) => {
      if (talk.id === action.payload.talkId) {
        return {
          ...talk,
          likes: talk.likes.includes(action.payload.userId)
            ? talk.likes.filter((id) => id !== action.payload.userId)
            : talk.likes.concat([action.payload.userId]),
        };
      }
      return talk;
    });
  default:
    return talkDetail;
  }
}

export default talkDetailReducer;