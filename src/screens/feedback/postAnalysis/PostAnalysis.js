import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { addEvent, editEvent } from '../../../redux/eventSlice';
import Header from '../../../component/Header';

export default function PostAnalysis({ navigation, route }) {
  const dispatch = useDispatch();
  const { item, index } = route.params || {};
  const isEditing = item !== undefined;

  const [form, setForm] = useState({
    event: '',
    improvements: '',
    date: '',
    category: '',
    sense: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setForm(item);
    }
  }, [item]);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      handleChange('date', formattedDate);
    }
  };

  const handleSubmit = () => {
    if (isEditing) {
      dispatch(editEvent({ index, updatedEvent: form }));
    } else {
      dispatch(addEvent(form));
    }

    setForm({
      event: '',
      improvements: '',
      date: '',
      category: '',
      sense: '',
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Post Analysis" />

      <ScrollView contentContainerStyle={styles.formContainer}>
        {[ 
          { label: 'Event', key: 'event' },
          { label: 'Improvements', key: 'improvements' },
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

        {/* Date Picker Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <View style={styles.input}>
              <Text style={{ color: form.date ? '#000' : '#999' }}>
                {form.date || 'Select Date'}
              </Text>
            </View>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={form.date ? new Date(form.date) : new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
            />
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {isEditing ? 'Update Event' : 'Add Event'}
          </Text>
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
