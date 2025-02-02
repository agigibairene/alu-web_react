import { bindActionCreators } from 'redux';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from './uiActionTypes';
import fetch from 'node-fetch';
  
export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};
  
export const logout = () => {
  return {
    type: LOGOUT,
    
  };
};


export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
  
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch('../../login-success.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(loginSuccess());
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
  
export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};
  
export const bindUIActions = (dispatch) => {
  return bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );
};