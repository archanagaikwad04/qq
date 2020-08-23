import { useParams } from 'react-router-dom';
export const LOAD_USER_LIST = 'LOAD_USER_LIST';
export const RENDER_USER_LIST = 'RENDER_USER_LIST';
export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_SEARCH_LIST = 'GET_SEARCH_LIST';

export const search = () => ({
  type: GET_SEARCH_LIST
});

export function loadUserList() {
  return {
    type: LOAD_USER_LIST
  };
}

export function loadUserProfile() {
  return {
    type: USER_PROFILE_LOADED
  };
}

export function getUserProfile(useParams: any) {
  console.log(useParams);
  return {
    type: GET_USER_PROFILE,
    useParams
  };
}
