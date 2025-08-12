import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import SettingsHeader from './Header';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const [provider, setProvider] = useState('sms');
  const [chatMode, setChatMode] = useState('receive_only');
  const [storeOtp, setStoreOtp] = useState('30 mins');
  const [messageType, setMessageType] = useState('type1');

  const navigation = useNavigation();

  const filterOptions = [
    'Substring Contains',
    'Substring Not Contains',
    'All',
    'From Number',
    'From Number Contains',
    'From Number Not Contains',
    'Only Known Numbers',
  ];

  const needsInput = [
    'Substring Contains',
    'Substring Not Contains',
    'From Number',
    'From Number Contains',
    'From Number Not Contains',
  ];
  const handleBack = () => {
    // Example: navigate back using React Navigation
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      Alert.alert('Back pressed!');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SettingsHeader title="Settings" onBack={handleBack} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        {/* Filter Options */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Filter Options</Text>
          {filterOptions.map(option => (
            <View key={option} style={styles.optionRow}>
              <Text style={styles.label}>{option}</Text>
              {needsInput.includes(option) && (
                <TextInput placeholder="Enter value" style={styles.input} />
              )}
            </View>
          ))}
        </View>

        {/* Provider Options */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Provider</Text>
          <RadioButton.Group onValueChange={setProvider} value={provider}>
            <View style={styles.radioRow}>
              <RadioButton value="sms" />
              <Text>SMS</Text>
            </View>
            <View style={styles.radioRow}>
              <RadioButton value="email" />
              <Text>Email</Text>
            </View>
          </RadioButton.Group>
        </View>

        {/* Chat Mode */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Chat Mode</Text>
          <View style={styles.radioRow}>
            <RadioButton
              value="receive_only"
              status={chatMode === 'receive_only' ? 'checked' : 'unchecked'}
              onPress={() => setChatMode('receive_only')}
            />
            <Text>Receive only (desc)</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton
              value="receive_and_share"
              status={
                chatMode === 'receive_and_share' ? 'checked' : 'unchecked'
              }
              onPress={() => setChatMode('receive_and_share')}
            />
            <Text>Receive and share (desc)</Text>
          </View>
        </View>

        {/* Store OTPs */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Store OTPs</Text>
          <View style={{ zIndex: 1000, marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={value => setStoreOtp(value)}
              onOpen={() => console.log('Picker opened')}
              value={storeOtp}
              items={[
                { label: '30 mins', value: '30 mins' },
                { label: '1 hour', value: '1 hour' },
                { label: '2 hour', value: '2 hour' },
                { label: '8 hour', value: '8 hour' },
                { label: '24 hour', value: '24 hour' },
                { label: '7 days', value: '7 days' },
                { label: '30 days', value: '30 days' },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/* Invite Members */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Invite Members</Text>
          <Button title="Invite" onPress={() => {}} />
        </View>

        {/* Message Type */}
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Message Type</Text>
          <RadioButton.Group onValueChange={setMessageType} value={messageType}>
            <View style={styles.radioRow}>
              <RadioButton value="type1" />
              <Text>Type 1</Text>
            </View>
            <View style={styles.radioRow}>
              <RadioButton value="type2" />
              <Text>Type 2</Text>
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: '#f2f2f7',
  },
  group: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  optionRow: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#fff',
    zIndex: 20,
    pointerEvents: 'none',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#f9f9f9',
    paddingRight: 30,
  },
};

export default SettingsScreen;
