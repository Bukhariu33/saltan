import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../../component/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import AddInfoModal from '../../../component/AddInfoModal';
import ExplanationModal from '../../../component/ExplanationModal';

export default function Professional() {
  const [infos, setInfos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [explanationVisible, setExplanationVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleSubmit = (data) => {
    // Add createdAt timestamp here
    const newInfo = { ...data, createdAt: new Date().toISOString() };
    setInfos(prev => [...prev, newInfo]);
    setModalVisible(false);
  };

  const handleLearnMore = (info) => {
    setSelectedInfo(info);
    setExplanationVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header title={'Professional'} />

      <View style={styles.content}>

        {infos.length === 0 && (
          <View style={styles.infoBlock}>
            <View style={styles.circle} />
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>No info added yet</Text>
              {/* Disable Learn More if no info */}
              <TouchableOpacity disabled>
                <Text style={[styles.linkText, { color: 'gray' }]}> Learn More</Text>
              </TouchableOpacity>
            </View>
            <Icon name="arrowdown" size={24} color="black" style={styles.arrow} />
          </View>
        )}

        {infos.map((info, index) => (
          <View key={index} style={styles.infoBlock}>
            <View style={styles.circle} />
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>{info.title || 'Added info'}</Text>
              <TouchableOpacity onPress={() => handleLearnMore(info)}>
                <Text style={styles.linkText}> Learn More</Text>
              </TouchableOpacity>
            </View>
            <Icon name="arrowdown" size={24} color="black" style={styles.arrow} />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Add Info</Text>
        </TouchableOpacity>
      </View>

      <AddInfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />

      <ExplanationModal
        visible={explanationVisible}
        onClose={() => setExplanationVisible(false)}
        info={selectedInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 30,
    alignItems: 'center',
    width: '90%',
  },
  infoBlock: {
    marginBottom: 20,
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: '500',
  },
  linkText: {
    fontSize: 14,
    color: 'blue',
    marginLeft: 4,
  },
  arrow: {
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#5B17FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
