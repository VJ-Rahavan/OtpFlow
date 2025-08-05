import React, {} from 'react';
import {View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {ScaleHook} from 'react-native-design-to-component';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dictionary} from './hooks/dictionary';
import {NavigationConstants} from '../../types/navigation';

import {OnboardingHeader} from './components/header/onboarding-header';
import {OnboardingButton} from './components/buttons/onboarding-button';

const backgroundImage = require('../../../assets/images/onboarding-three.jpg');

export const OnboardingThreeScreen = () => {
  const navigation = useNavigation();
  const scaleHook = ScaleHook();
  const getHeight = scaleHook?.getHeight || ((value) => value);

  const {AddImages, Continue} = dictionary.Onboarding;

  // -------------------- EFFECTS -------------------- //

  // -------------------- ACTIONS -------------------- //
  const onPressContinue = () => {
    navigation.navigate(NavigationConstants.ONBOARDING_FOUR);
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
            title={AddImages}
            startProgress={33}
            endProgress={66}
          />
        </View>
        <View style={styles.buttonContainer}>
          <OnboardingButton text={Continue} onPress={onPressContinue} />
        </View>
      </SafeAreaView>
    </FastImage>
  );
};
