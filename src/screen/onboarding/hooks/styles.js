import React, {useMemo, useContext, createContext} from 'react';
import {View} from 'react-native';

import {ScaleHook} from 'react-native-design-to-component';

import {fonts} from './fonts';
import {colors} from './colors';

const StyleContext = createContext(null);

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};

export const StyleProvider = ({children}) => {
  const scaleHook = ScaleHook();
  
  // Provide fallback values if ScaleHook returns null
  const getHeight = scaleHook?.getHeight || ((value) => value);
  const getWidth = scaleHook?.getWidth || ((value) => value);
  const fontSize = scaleHook?.fontSize || ((value) => value);
  const radius = scaleHook?.radius || ((value) => value);

  // ** ** ** ** ** TEXT STYLES ** ** ** ** **
  const textStyles = {
    bold12_bistre: {
      color: colors.bistre,
      fontFamily: fonts.semiBold,
      fontSize: fontSize(16),
    },
    bold32_bistre: {
      color: colors.bistre,
      fontFamily: fonts.bold,
      fontSize: fontSize(32),
    },
    bold32_alabaster: {
      color: colors.alabaster,
      fontFamily: fonts.bold,
      fontSize: fontSize(32),
    },
    medium16_bistre: {
      color: colors.bistre,
      fontFamily: fonts.medium,
      fontSize: fontSize(16),
    },
    regular20_bistre: {
      color: colors.bistre,
      fontFamily: fonts.regular,
      fontSize: fontSize(20),
    },
    semiBold16_alabaster: {
      color: colors.alabaster,
      fontFamily: fonts.semiBold,
      fontSize: fontSize(16),
    },
    semiBold20_bistre: {
      color: colors.bistre,
      fontFamily: fonts.semiBold,
      fontSize: fontSize(20),
    },
    semiBold28_bistre: {
      color: colors.bistre,
      fontFamily: fonts.semiBold,
      fontSize: fontSize(28),
    },
    semiBold40_bistre: {
      color: colors.bistre,
      fontFamily: fonts.semiBold,
      fontSize: fontSize(40),
    },
  };

  // ** ** ** ** ** FORM STYLES ** ** ** ** **
  const formStyles = {
    textInput: {
      width: '100%',
      borderRadius: radius(8),
      backgroundColor: 'white',
      paddingVertical: getHeight(12),
      paddingHorizontal: getWidth(16),
    },
  };

  // ** ** ** ** ** MEMOIZE ** ** ** ** **
  const values = useMemo(
    () => ({colors, textStyles, formStyles}),
    [colors, textStyles, formStyles],
  );

  // ** ** ** ** ** RENDER ** ** ** ** **
  return (
    <View style={{flex: 1}}>
      <StyleContext.Provider value={values}>{children}</StyleContext.Provider>
    </View>
  );
};
