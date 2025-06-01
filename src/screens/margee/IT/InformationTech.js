// screens/InformationTech.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import ButtonList from '../../../component/ButtonList';


export default function InformationTech() {
  const levels = ["Normal", "Medium", "Professional", "Current", "Officer"];
  const handlePress = (label) => {
    Alert.alert(`You clicked on ${label}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>This is Information Tech</Text>
      <ButtonList items={levels} onPressItem={handlePress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign:"center"
  },
});
