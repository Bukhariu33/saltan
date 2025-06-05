import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../component/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import AddInfoModal from '../../component/AddInfoModal';
import ExplanationModal from '../../component/ExplanationModal';
import AddTitleModal from '../../component/EditTitle';

const STORAGE_KEY = '@expectations_titles';

export default function Expectations() {
  const [titles, setTitles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [explanationVisible, setExplanationVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(null);

  // Load titles from AsyncStorage on mount
  useEffect(() => {
    const loadTitles = async () => {
      try {
        const savedTitles = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTitles !== null) {
          setTitles(JSON.parse(savedTitles));
        }
      } catch (e) {
        console.error('Failed to load titles.', e);
      }
    };
    loadTitles();
  }, []);

  // Save titles to AsyncStorage whenever titles change
  useEffect(() => {
    const saveTitles = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(titles));
      } catch (e) {
        console.error('Failed to save titles.', e);
      }
    };
    saveTitles();
  }, [titles]);

  const handleAddTitle = (title) => {
    const newBlock = { title, infos: [] };
    setTitles(prev => [...prev, newBlock]);
    setAddModalVisible(false);
  };

  const handleAddInfo = (data) => {
    if (currentTitleIndex === null) return;
    const newInfo = { ...data, createdAt: new Date().toISOString() };
    const updatedTitles = [...titles];
    updatedTitles[currentTitleIndex].infos.push(newInfo);
    setTitles(updatedTitles);
    setModalVisible(false);
    setCurrentTitleIndex(null);
  };

  const handleLearnMore = (info) => {
    setSelectedInfo(info);
    setExplanationVisible(true);
  };

  const handleDeleteTitle = (indexToDelete) => {
    const updatedTitles = titles.filter((_, index) => index !== indexToDelete);
    setTitles(updatedTitles);
  };

  return (
    <View style={styles.container}>
      <Header title="Expectations" />
      <ScrollView contentContainerStyle={styles.content}>
        {titles.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No professional info added yet.</Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setAddModalVisible(true)}
            >
              <Text style={styles.primaryButtonText}>Add Your First Title</Text>
            </TouchableOpacity>
          </View>
        ) : (
          titles.map((block, index) => (
            <View key={index} style={styles.infoCard}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{block.title}</Text>
                <TouchableOpacity onPress={() => handleDeleteTitle(index)}>
                  <Icon name="delete" size={20} color="#d62828" />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrap}>
                {block.infos.map((info, i) => (
                  <View key={i} style={styles.rowItem}>
                    <TouchableOpacity
                      style={styles.infoButton}
                      onPress={() => handleLearnMore(info)}
                    >
                      <Text style={styles.buttonText}>{info.title}</Text>
                    </TouchableOpacity>
                    <Icon name="arrowright" size={20} style={styles.iconArrow} />
                  </View>
                ))}

                <TouchableOpacity
                  style={[styles.infoButton, styles.addInfoButtonInline]}
                  onPress={() => {
                    setCurrentTitleIndex(index);
                    setModalVisible(true);
                  }}
                >
                  <Text style={[styles.buttonText, { color: '#d62828' }]}>
                    + Add Info
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}

        {titles.length > 0 && (
          <TouchableOpacity
            style={styles.addTitleButton}
            onPress={() => setAddModalVisible(true)}
          >
            <Text style={styles.addTitleText}>+ Add Another Title</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <AddInfoModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setCurrentTitleIndex(null);
        }}
        onSubmit={handleAddInfo}
      />

      <ExplanationModal
        visible={explanationVisible}
        onClose={() => setExplanationVisible(false)}
        info={selectedInfo}
      />

      <AddTitleModal
        visible={addModalVisible}
        onClose={() => setAddModalVisible(false)}
        onSubmit={handleAddTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 15,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#d62828',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  iconArrow: {
    marginHorizontal: 5,
    color: '#888',
  },
  addInfoButtonInline: {
    borderColor: '#d62828',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  addTitleButton: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  addTitleText: {
    fontWeight: '600',
    color: '#333',
  },
});
