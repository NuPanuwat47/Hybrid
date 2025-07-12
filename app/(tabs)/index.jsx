// app/(tabs)/index.js
import React, { useContext } from 'react';
import { Image, Text, View, StyleSheet, Switch, ScrollView } from 'react-native';
import { ThemeContext, themes } from '../../contexts/themeContext';

const SkillBadge = ({ skill, theme }) => (
  <View style={[styles.skillBadge, { 
    backgroundColor: theme.card,
    borderColor: theme.borderColor,
  }]}>
    <Text style={[styles.skillText, { color: theme.text }]}>{skill.name}</Text>
  </View>
);

const ProfileScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = themes[theme];
  const isDarkMode = theme === 'dark';

  const skills = [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Java'},
    { name: 'C#'},
    { name: 'HTML/CSS' }
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>My Profile</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchText, { color: currentTheme.text }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#767577', true: currentTheme.accent }}
            thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>

      <View style={styles.profileSection}>
        <View style={[styles.avatarContainer, { borderColor: currentTheme.accent }]}>
          <Image
            source={require('../../assets/mypicture.jpg')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        
        <View style={[styles.infoCard, { 
          backgroundColor: currentTheme.card, 
          borderColor: currentTheme.borderColor,
          shadowColor: currentTheme.cardShadow,
        }]}>
          <Text style={[styles.name, { color: currentTheme.text }]}>Panuwat Thammabut</Text>
          <Text style={[styles.studentId, { color: currentTheme.accent }]}>653450099-8</Text>
          
          <View style={[styles.divider, { backgroundColor: currentTheme.borderColor }]} />
          
          <View style={styles.details}>
            <Text style={[styles.subtitle, { color: currentTheme.subtitle }]}>Computer Science</Text>
            <Text style={[styles.subtitle, { color: currentTheme.subtitle }]}>Computer and Information Science</Text>
            <Text style={[styles.university, { color: currentTheme.text }]}>Khon Kaen University</Text>
          </View>

          <View style={[styles.divider, { backgroundColor: currentTheme.borderColor }]} />
          
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} theme={currentTheme} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
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
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatarContainer: {
    padding: 3,
    borderRadius: 75,
    borderWidth: 2,
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  infoCard: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  studentId: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    marginVertical: 20,
  },
  details: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  university: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  skillsContainer: {
    width: '100%',
    gap: 12,
  },
  skillBadge: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  skillText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 0,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});

export default ProfileScreen;