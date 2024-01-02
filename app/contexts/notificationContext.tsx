"use client"
import React, { createContext, useState, useContext } from 'react'
import Notification from '@/components/notification'

export interface NotificationType {
  message: string;
  type: "success" | "error"
}

interface NotificationContextType {
  notification: NotificationType;
  showNotification: (notification: NotificationType) => void;
  resetNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
  notification: { message: "", type: "error" },
  showNotification: () => {},
  resetNotification: () => {},
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotification] = useState<NotificationType>({
    message: "",
    type: "error"
  });

  const showNotification = ({ message, type }: NotificationType) => {
    setNotification({ message, type });
  };

  const resetNotification = () => {
    setNotification({ message: "", type: "error" });
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification, resetNotification }}>
      {notification.message && (
        <Notification message={notification.message} type={notification.type} />
      )}
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
};
