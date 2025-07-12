// app/(tabs)/about.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { ThemeContext, themes } from '../../contexts/themeContext';

const SkillBadge = ({ title, level, theme }) => (
  <View style={[styles.skillBadge, { 
    backgroundColor: theme.card,
    borderColor: theme.borderColor,
  }]}
  >
    <Text style={[styles.skillTitle, { color: theme.text }]}>{title}</Text>
    <View style={styles.levelContainer}>
      {[1, 2, 3, 4, 5].map((dot) => (
        <View
          key={dot}
          style={[
            styles.levelDot,
            { 
              backgroundColor: dot <= level ? theme.accent : theme.borderColor,
              opacity: dot <= level ? 1 : 0.3
            }
          ]}
        />
      ))}
    </View>
  </View>
);

const AboutScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = themes[theme];
  const isDarkMode = theme === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Course Details</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchText, { color: currentTheme.text }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: currentTheme.accent }}
            thumbColor={isDarkMode ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>

      <View style={[styles.card, { 
        backgroundColor: currentTheme.card,
        borderColor: currentTheme.borderColor,
        shadowColor: currentTheme.cardShadow,
      }]}>
        <View style={styles.courseHeader}>
          <Text style={[styles.courseCode, { color: currentTheme.accent }]}>IN405109</Text>
          <Text style={[styles.courseTitle, { color: currentTheme.text }]}>
            Hybrid Mobile Application Programming with React Native
          </Text>
        </View>

        <View style={[styles.divider, { backgroundColor: currentTheme.borderColor }]} />

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>คำอธิบายรายวิชา</Text>
          <Text style={[styles.description, { color: currentTheme.subtitle }]}>
            สถาปัตยกรรมฮาร์ดแวร์ คุณลักษณะและข้อจํากัดของอุปกรณ์เคลื่อนที่ 
            เครื่องมือและภาษาที่ใช้สําหรับพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่หลากหลายแพลตฟอร์ม 
            การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่โดยใช้ภาษาหลากหลายแพลตฟอร์ม 
            กระบวนการพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่หลากหลายแพลตฟอร์ม 
            การใช้หน่วยความจําและส่วนเก็บบันทึกข้อมูล การขออนุญาตและการเข้าถึงส่วนฮาร์ดแวร์ 
            ส่วนติดต่อกับผู้ใช้ การสื่อสารเครือข่ายกับภายนอก การเชื่อมโยงกับระบบเครืองแม่ข่าย 
            การทดสอบโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่โดยใช้ระบบคอมพิวเตอร์ ประเด็นด้านความมั่นคง การฝึกปฏิบัติ
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginRight: 8,
    fontSize: 16,
  },
  card: {
    margin: 16,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  courseHeader: {
    marginBottom: 16,
    alignItems: 'center',
  },
  courseCode: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 1,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 28,
  },
  divider: {
    height: 1,
    marginVertical: 24,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  skillBadge: {
    flex: 1,
    margin: 4,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  levelContainer: {
    flexDirection: 'row',
  },
  levelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default AboutScreen;