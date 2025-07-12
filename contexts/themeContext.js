// contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// กำหนดค่าสีสำหรับแต่ละ Theme
export const themes = {
  light: {
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#1a1a1a',
    subtitle: '#000000ff',
    borderColor: '#e0e0e0',
    tabActive: '#007AFF',
    tabInactive: '#8E8E93',
    accent: '#007AFF',
    cardShadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: '#1a1a1a',
    card: '#2c2c2c',
    text: '#ffffff',
    subtitle: '#ffffffff',
    borderColor: '#404040',
    tabActive: '#0A84FF',
    tabInactive: '#8E8E93',
    accent: '#0A84FF',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ใช้ useColorScheme เพื่อดึงค่า Theme ปัจจุบันของเครื่อง
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || 'light');

  // อัปเดต Theme เมื่อค่าในเครื่องเปลี่ยน
  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};