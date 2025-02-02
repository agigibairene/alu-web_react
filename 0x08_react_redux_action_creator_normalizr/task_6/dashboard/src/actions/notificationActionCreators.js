import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const bindNotificationActions = (dispatch) => {
  return bindActionCreators(
    {
      markAsAread,
      setNotificationFilter,
    },
    dispatch
  );
};