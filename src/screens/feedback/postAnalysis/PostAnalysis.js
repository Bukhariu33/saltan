import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PostAnalysis() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    event: '',
    improvements: '',
    date: '',
    category: '',
    sense: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleAddEvent = () => {
    console.log('Form submitted:', form);
    // Add your save logic here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Post Analysis</Text>
      </View>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        {[
          { label: 'Event', key: 'event' },
          { label: 'Improvements', key: 'improvements' },
          { label: 'Date', key: 'date' },
          { label: 'Category', key: 'category' },
          { label: 'Sense', key: 'sense' },
        ].map(({ label, key }) => (
          <View key={key} style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter ${label}`}
              value={form[key]}
              onChangeText={(value) => handleChange(key, value)}
              placeholderTextColor="#999"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
          <Text style={styles.buttonText}>Add Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5A1EDC',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  backArrow: {
    fontSize: 22,
    color: 'white',
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  formContainer: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8A3FFC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#5A1EDC',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
