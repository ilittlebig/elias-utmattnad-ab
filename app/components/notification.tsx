"use client"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNotification } from '@/contexts/notificationContext'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoMdCloseCircle } from 'react-icons/io'

const Notification = () => {
  const { notification, resetNotification } = useNotification();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isSuccess = notification.type === "success";

  const notificationVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  useEffect(() => {
    if (notification.message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        resetNotification();
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification.message, resetNotification]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex justify-center w-full z-50 fixed py-8 pointer-events-none"
          variants={notificationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-x-4 py-4 px-8 rounded-md bg-white shadow-sm border">
	    {isSuccess ? (
	      <IoIosCheckmarkCircle className="w-7 h-7 text-green-500" />
	    ) : (
	      <IoMdCloseCircle className="w-7 h-7 text-red-500" />
	    )}

            <div className={`text-lg font-medium ${isSuccess ? "text-green-500" : "text-red-500"}`}>
              {notification.message}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification;
