import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const SettingsHeader = ({ title = 'Settings', onBack }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        {/* <Icon name="chevron-back" size={24} color="#007AFF" /> */}
        <View style={{ width: 10, height: 10, backgroundColor: '#000' }} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/* Invisible placeholder to center title */}
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight + 10,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    justifyContent: 'center',
  },
  placeholder: {
    width: 40, // To balance the layout since backButton is on the left
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
});

export default SettingsHeader;
