import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

export const useDarkMode = () => {
  const [darkState, setDarkState] = useState(false);
  const [isDark, setIsDark] = useLocalStorage('isDark', false);

  useEffect(() => {
    setDarkState(isDark || false);
  }, [isDark]);

  function toggleDark() {
    setIsDark(!isDark);
  }

  return [darkState, toggleDark] as const;
};
