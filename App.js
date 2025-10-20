import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
import TeacherMessage from './src/components/custom/TeacherMessage'; // Students create this -- (Done)
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name="Sameer Khurram" regNo="SP23-BSE-003" />
      {/* TODO: after creating the custom/TeacherMessage component, render it here */}
      <TeacherMessage />  {/* Done */}
      <TasbihList />
      <SearchAndAdd />
    </ScrollView>
  );
}
