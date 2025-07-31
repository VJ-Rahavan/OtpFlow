// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {
  storeSampleText,
  clearSampleReducerState,
} from '../../redux/reducers/SampleReducer';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';

function SampleUI() {
  const dispatch = useDispatch();
  const test = useSelector((state: RootState) => state.sampleReducer.test);
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Sample UI</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={input}
        onChangeText={setInput}
      />

      <Button
        title="Store Text"
        onPress={() => dispatch(storeSampleText(input))}
      />
      <View style={styles.spacer} />
      <Button
        title="Reset Text"
        onPress={() => {
          dispatch(clearSampleReducerState());
          setInput('');
        }}
      />

      <Text style={styles.output}>Current Value: {test}</Text>

      <Button
        title="Go to Dummy Screen"
        onPress={() => {
          //@ts-ignore
          navigation.navigate('Dummy');
        }}
      />
    </View>
  );
}

export default SampleUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  spacer: {
    height: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
