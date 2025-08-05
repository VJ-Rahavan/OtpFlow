import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import {ScaleHook} from 'react-native-design-to-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dictionary} from './hooks/dictionary';

import {OnboardingHeader} from './components/header/onboarding-header';
import {OnboardingButton} from './components/buttons/onboarding-button';
import { NavigationConstants } from '../../types/navigation';
import { StorageKey } from '../../utils/StorageKey';

const backgroundImage = require('../../../assets/images/onboarding-four.jpg');

export const OnboardingFourScreen = () => {
  const navigation = useNavigation();
  const scaleHook = ScaleHook();
  const getHeight = scaleHook?.getHeight || ((value) => value);

  const {GetReminders, Finish} = dictionary.Onboarding;

  // -------------------- EFFECTS -------------------- //
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  // -------------------- ACTIONS -------------------- //
  const onPressFinish = async () => {
    await AsyncStorage.setItem(StorageKey.ONBOARDED, 'true');

    navigation.navigate(NavigationConstants.SIGNUP);
  };

  // -------------------- STYLES -------------------- //
  const styles = StyleSheet.create({
    backgroundImage: {
      height: '100%',
      width: '100%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: getHeight(40),
    },
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: getHeight(24),
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'flex-end',
    },
  });

  // -------------------- RENDER -------------------- //
  return (
    <FastImage
      style={styles.backgroundImage}
      source={backgroundImage}
      resizeMode={FastImage.resizeMode.cover}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <OnboardingHeader
            title={GetReminders}
            darkMode={false}
            startProgress={66}
            endProgress={100}
          />
        </View>
        <View style={styles.buttonContainer}>
          <OnboardingButton text={Finish} onPress={onPressFinish} />
        </View>
      </SafeAreaView>
    </FastImage>
  );
};
