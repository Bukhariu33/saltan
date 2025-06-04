import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonList from '../../../component/ButtonList';
import Header from '../../../component/Header';

export default function Social({navigation}) {
  const levels = ["Domestic", "Internal", "External", "Personalities"];

  const handlePress = (label) => {
    if (label === 'Personalities'){
        navigation.navigate('Persons')
    }

  }

  return (
    <View style={styles.container}>
        <Header title={'Social'}/>
      <Text style={styles.title}>Select a Social Level</Text>
      <ButtonList items={levels} onPressItem={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop:20,
    textAlign: 'center',
  },
});
