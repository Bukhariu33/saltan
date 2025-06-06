import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Feedback = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome, Jalal-ud-Din</Text>
        <Text style={styles.subtitle}>Lead the World</Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Events')}>
          <Text style={styles.buttonText}>Post Analysis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Expectations')}>
          <Text style={styles.buttonText}>Expectation From</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#530AF1',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    marginBottom: 30,
    marginTop:30
  },
  welcome: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginTop:50,
  },
  buttonCard: {
    width: 150,
    height: 150,
    backgroundColor: '#530AF1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 6,
    margin: 8,
    marginTop:15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
