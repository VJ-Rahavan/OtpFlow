import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  storeSampleText,
  clearSampleReducerState,
} from '../../redux/reducers/SampleReducer'; // adjust path as needed
import { RootState } from '../../redux/store';

// Dummy UI component
function DummyUI() {
  const dispatch = useDispatch();
  const test = useSelector((state: RootState) => state.sampleReducer.test);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Redux Test Value:</Text>
      <Text style={styles.value}>{test}</Text>

      <View style={styles.button}>
        <Button
          title="Update Value"
          onPress={() => dispatch(storeSampleText('Updated Text'))}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset Value"
          color="tomato"
          onPress={() => dispatch(clearSampleReducerState())}
        />
      </View>
    </View>
  );
}

export default DummyUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
  },
});
