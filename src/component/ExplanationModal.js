import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ExplanationModal({ visible, onClose, info }) {
  // Format createdAt date/time if provided
  const createdAt = info?.createdAt
    ? new Date(info.createdAt).toLocaleString()
    : 'N/A';

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeading}>Explanation</Text>

          <Text style={styles.sectionLabel}>Description:</Text>
          <Text style={styles.descriptionText}>
            {info?.description || 'No description provided.'}
          </Text>

          <Text style={styles.sectionLabel}>Created At:</Text>
          <Text style={styles.descriptionText}>{createdAt}</Text>

          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffeeee',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalHeading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
  },
  cancelButton: {
    marginTop: 25,
    paddingVertical: 12,
    backgroundColor: '#5B17FF',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
