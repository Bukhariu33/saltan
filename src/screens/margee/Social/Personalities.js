import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../../component/Header';
import { Ionicons } from '@expo/vector-icons'; // for back arrow or icons
import { Avatar } from 'react-native-elements'; // Optional, you can use Image too

const data = [
  { id: '1', name: 'Name', subname: 'Subname', color: '#2E86DE' },
  { id: '2', name: 'Name', subname: 'Subname', color: '#E74C3C' },
  { id: '3', name: '', subname: '', color: '#BDC3C7' },
  { id: '4', name: '', subname: '', color: '#BDC3C7' },
];

export default function Personalities({navigation, route}) {
    const form  = route?.params?.form;
    console.log(form)
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: item.color }]} />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subname}>{item.subname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Analyze the Data" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('AddPerson')}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#EDEEFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subname: {
    fontSize: 12,
    color: '#555',
  },
  addButton: {
    backgroundColor: '#4B2EF2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    position: 'absolute',
    bottom: 30,
    right: 20,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
