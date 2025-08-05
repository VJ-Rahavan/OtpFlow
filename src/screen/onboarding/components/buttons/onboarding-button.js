import React, {} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ScaleHook} from 'react-native-design-to-component';

import {useStyle} from '../../hooks/styles';

export const OnboardingButton = props => {
  const {text, darkMode = false, arrow = true, onPress} = props;

  const {colors, textStyles} = useStyle();
  const scaleHook = ScaleHook();
  const getHeight = scaleHook?.getHeight || ((value) => value);
  const getWidth = scaleHook?.getWidth || ((value) => value);
  const fontSize = scaleHook?.fontSize || ((value) => value);
  const radius = scaleHook?.radius || ((value) => value);

  // -------------------- EFFECTS -------------------- //

  // -------------------- ACTIONS -------------------- //
  const onPressFinal = () => {
    onPress ? onPress() : null;
  };

  // -------------------- STYLES -------------------- //
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: getWidth(16),
      paddingRight: getWidth(24),
      paddingVertical: getHeight(8),
      borderTopLeftRadius: radius(8),
      borderBottomLeftRadius: radius(8),
      backgroundColor: darkMode ? colors.bistre : colors.alabaster,
    },
    buttonText: {
      ...textStyles.medium16_bistre,
      ...(darkMode && {
        ...textStyles.semiBold16_alabaster,
      }),
      paddingBottom: getHeight(4),
    },
  });

  // -------------------- RENDER -------------------- //
  return (
    <TouchableOpacity style={styles.button} onPress={onPressFinal}>
      <Text style={styles.buttonText}>{text}</Text>
      {arrow && (
        <>
          <View style={{width: getWidth(10)}} />
          <Icon
            name="chevron-right"
            size={fontSize(16)}
            color={colors.bistre}
          />
        </>
      )}
    </TouchableOpacity>
  );
};
