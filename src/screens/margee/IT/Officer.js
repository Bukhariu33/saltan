// screens/InformationTech.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import ButtonList from '../../../component/ButtonList';
import Header from '../../../component/Header';


export default function Officer({navigation}) {
  const levels = ["Afrahim", "Saleh", "Umer",];
  const handlePress = (label) => {
    if (label === 'Afrahim') {
      navigation.navigate('Afrahim');
    } else {
      Alert.alert(`You clicked on ${label}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Header title={'Officers'}/> 
      <Text style={styles.header}>This is Information Tech</Text>
      <ButtonList items={levels} onPressItem={handlePress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign:"center"
  },
});
