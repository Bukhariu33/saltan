import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.backButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
      <Text
        style={styles.headerText}
        accessibilityRole="header"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5A1EDC',
    paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
