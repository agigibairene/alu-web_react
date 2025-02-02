import * as notificationsData from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
    const notifications = notificationsData.default;
    const userNotifications = [];
    
    for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].author.id === userId) {
            userNotifications.push(notifications[i].context);
        }
    }
    
    return userNotifications;
}
