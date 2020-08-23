import { RENDER_USER_LIST } from '../actions';
import { GET_SEARCH_LIST } from '../actions';
import { GET_USER_PROFILE } from '../actions';
import { USER_PROFILE_LOADED } from '../actions';

const initialState = {
  userList: []
};
const user = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SEARCH_LIST:
      console.log(action.payload);
      return {
        ...state,
        text: action.payload
      };
    case RENDER_USER_LIST:
      return {
        ...state,
        userList: action.userList
      };
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
export default user;
