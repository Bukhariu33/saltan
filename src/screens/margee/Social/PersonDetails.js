import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Header from '../../../component/Header';

export default function PersonDetails() {
  return (
    <View style={styles.container}>
      <Header title="Personal Detail" />

      <View style={styles.content}>
        {/* Circle Avatar Placeholder */}
        <View style={styles.avatar} />

        {/* Name */}
        <Text style={styles.name}>Name</Text>

        {/* Description */}
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  descTitle: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
    color: '#333',
  },
});
