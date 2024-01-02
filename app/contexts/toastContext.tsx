"use client"
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import CartNotificationToast from '@/(marketplace)/components/cart/cartNotificationToast'

export interface Toast {
  name: string,
  price: number,
  image: string,
  className?: string
}

interface ToastContextValue {
  showToast: ({ name, price, image, className }: Toast) => void
}

const defaultState: ToastContextValue = {
  showToast: () => {}
};

const ToastContext = createContext<ToastContextValue>(defaultState);

interface ToastProviderProps {
  children: ReactNode
}

let timeoutId: NodeJS.Timeout | null = null;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState({
    name: "",
    price: 0,
    image: "",
    className: "",
    isVisible: false
  });

  const toastShow = "opacity-1";
  const toastHide = "opacity-0";
  const [toastClass, setToastClass] = useState(toastHide);

  useEffect(() => {
    if (toast.isVisible) {
      setToastClass(toastShow);
    } else {
      setToastClass(toastHide);
    }
  }, [toast.isVisible]);

  const showToast = useCallback(({ name, price, image, className = "" }: Toast) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setToast({ name, price, image, className, isVisible: true });

    timeoutId = setTimeout(() => {
      setToast({ name, price, image, className, isVisible: false });
      timeoutId = null;
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <CartNotificationToast
	name={toast.name}
	price={toast.price}
	image={toast.image}
	className={toastClass}
      />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
