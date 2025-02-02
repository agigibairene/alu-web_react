import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizeNotifications = (data) => {
  return normalize(data, [notification]);
};

export const getAllNotificationsByUser = (normalizedData, userId) => {
  const notifications = normalizedData.entities.notifications;
  const result = [];

  for (const id in notifications) {
    if (notifications[id].author.id === userId) {
      result.push(notifications[id]);
    }
  }

  return result;
};
