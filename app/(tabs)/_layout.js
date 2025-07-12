// app/(tabs)/_layout.js
import { Tabs } from 'expo-router';
import { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext';
import { Ionicons } from '@expo/vector-icons'; // หรือ Icon Library อื่นๆ

export default function TabsLayout() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentTheme.tabActive,
        tabBarInactiveTintColor: currentTheme.tabInactive,
        tabBarStyle: {
          backgroundColor: currentTheme.card,
          borderTopColor: currentTheme.borderColor,
        },
        headerStyle: {
          backgroundColor: currentTheme.card,
        },
        headerTitleStyle: {
          color: currentTheme.text,
        },
        headerTintColor: currentTheme.text, // สีของปุ่ม back
      }}>
      <Tabs.Screen
        name="index" // ชื่อไฟล์คือ index.js
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about" // ชื่อไฟล์คือ about.js
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}