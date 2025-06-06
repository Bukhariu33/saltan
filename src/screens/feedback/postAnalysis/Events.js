import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from '../../../component/Header';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from '../../../redux/eventSlice';

export default function Events({ navigation }) {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteEvent(index));
  };

  const handleEdit = (item, index) => {
    navigation.navigate('Postanalysis', { item, index });
  };

  return (
    <View style={styles.container}>
      <Header title="Events" />

      <View style={styles.headerRow}>
        {['Date', 'Event', 'Improvements', 'Category', 'Sense', 'Actions'].map(
          (title, i) => (
            <Text key={i} style={styles.headerText}>
              {title}
            </Text>
          )
        )}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {events.length === 0 ? (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events available.</Text>
          </View>
        ) : (
          events.map((item, index) => (
            <View
              key={index}
              style={[
                styles.row,
                index % 2 === 0 ? styles.evenRow : styles.oddRow,
                styles.rowShadow,
              ]}
            >
              <Text style={styles.cell}>{item.date}</Text>
              <Text style={styles.cell}>{item.event}</Text>
              <Text style={styles.cell}>{item.improvements}</Text>
              <Text style={styles.cell}>{item.category}</Text>
              <Text style={styles.cell}>{item.sense}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleEdit(item, index)}>
                  <Text style={styles.actionText}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(index)}>
                  <Text style={styles.actionText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Postanalysis')}
      >
        <Text style={styles.addButtonText}>＋ Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#5A1EDC',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
    paddingHorizontal: 5,
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 6,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  evenRow: {
    backgroundColor: '#F0F0F0',
  },
  oddRow: {
    backgroundColor: '#E0E0E0',
  },
  rowShadow: {
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
  },

  cell: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    gap: 15,
    paddingHorizontal: 5,
  },
  actionText: {
    fontSize: 18,
  },

  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#5A1EDC',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#5A1EDC',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  noEventsContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  noEventsText: {
    fontSize: 16,
    color: '#777',
  },
});
