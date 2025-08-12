import { ActivityIndicator, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Navigation from './src/screen/Navigation';
import { StyleProvider } from './src/screen/onboarding/hooks/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { StorageKey } from './src/utils/StorageKey';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [onboarded, setOnboarded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

   // -------------------- EFFECTS -------------------- //
  useEffect(() => {
    getStorage();
  }, []);

  // -------------------- ACTIONS -------------------- //
  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem(StorageKey.ONBOARDED) || 'false';
    setOnboarded(JSON.parse(onboarded));
    setIsLoading(false);
  };
  
  if (isLoading) {
    return (
      <StyleProvider>
        <View style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
           <ActivityIndicator size="large" />
        </View>
      </StyleProvider>
    );
  }
  
  return (
    <SafeAreaProvider style={styles.container}>
      <StyleProvider>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation onboarded={onboarded}/>
      </View>
    </StyleProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
