import { useState, useEffect } from 'react';

const useLocale = () => {
  const [locale, setLocale] = useState('en-US');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setLocale(navigator.language || 'en-US');
    }
  }, []);

  return locale;
};

export default useLocale;
