import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AddInfoModal({ visible, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [node, setNode] = useState('');

  const handleAdd = () => {
    onSubmit({ title, description, node });
    setTitle('');
    setDescription('');
    setNode('');
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalLabel}>add here</Text>
          <TextInput
            style={styles.input}
            value={title}
            placeholder="Front-End"
            onChangeText={setTitle}
          />

          <Text style={styles.modalLabel}>description</Text>
          <TextInput
            style={styles.input}
            value={description}
            placeholder="Add the things"
            onChangeText={setDescription}
          />

          <Text style={styles.modalLabel}>Node</Text>
          <TextInput
            style={styles.input}
            value={node}
            placeholder="Add No. here (1,2,3....)"
            onChangeText={setNode}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleAdd}>
            <Text style={styles.submitButtonText}>Add Info</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
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
  modalLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#d62828',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#444',
    fontSize: 14,
  },
});
