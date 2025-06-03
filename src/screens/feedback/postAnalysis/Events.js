import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../../component/Header'; // Adjust path as needed

export default function Events() {
  const data = [
    { date: '2025-06-01', event: 'Meeting', improvise: 'Yes', category: 'Work', sense: 'Productive' },
    { date: '2025-06-02', event: 'Gym', improvise: 'No', category: 'Health', sense: 'Energetic' },
    { date: '2025-06-03', event: 'Study', improvise: 'Yes', category: 'Education', sense: 'Focused' },
  ];

  return (
    <View style={styles.container}>
      <Header title="Events" />

      {/* Column Headers */}
      <View style={styles.headerRow}>
        {['Date', 'Event', 'Improvise', 'Category', 'Sense'].map((item) => (
          <Text key={item} style={styles.headerText}>{item}</Text>
        ))}
      </View>

      {/* Rows */}
      <ScrollView>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.event}</Text>
            <Text style={styles.cell}>{item.improvise}</Text>
            <Text style={styles.cell}>{item.category}</Text>
            <Text style={styles.cell}>{item.sense}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'darkgreen',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffeeee',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
  },
  moreButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#5A1EDC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 4,
  },
  moreButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
