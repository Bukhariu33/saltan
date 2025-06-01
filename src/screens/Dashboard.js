import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome, Uzair</Text>
        <Text style={styles.subtitle}>Lead the World</Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Marqee')}>
          <Text style={styles.buttonText}>Marqee</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCard}>
          <Text style={styles.buttonText}>Secret</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

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
