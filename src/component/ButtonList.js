// components/ButtonList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonList({ items = [], onPressItem }) {
  return (
    <View style={styles.container}>
      {items.map((label, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressItem?.(label)}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5A4FCF',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
