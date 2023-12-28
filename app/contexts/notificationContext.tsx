"use client"
import React, { createContext, useState, useContext } from 'react'
import Notification from '@/components/notification'

export interface NotificationType {
  message: string;
  type: "success" | "error";
}

const NotificationContext = createContext<{
  notification: NotificationType;
  showNotification: (notification: NotificationType) => void;
  resetNotification: () => void;
}>({
  notification: { message: "", type: "" },
  showNotification: () => {},
  resetNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState<NotificationType>({
    message: "",
    type: ""
  });

  const showNotification = ({ message, type }: NotificationType) => {
    setNotification({ message, type });
  };

  const resetNotification = () => {
    setNotification({ message: "", type: "" });
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification, resetNotification }}>
      <Notification
        message={notification.message}
        type={notification.type}
      />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a 'NotificationProvider'");
  }
  return context;
}
