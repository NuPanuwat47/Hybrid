// app/_layout.js
import { Stack } from 'expo-router';
import { ThemeProvider } from '../contexts/themeContext';

export default function RootLayout() {
  return (
    // ครอบทุกอย่างด้วย ThemeProvider
    <ThemeProvider>
      <Stack>
        {/* ซ่อน Header ของ Layout หลัก แล้วไปตั้งค่าใน Tab Layout แทน */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}