import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingOneScreen } from './onboarding/OnboardingOneScreen';
import { OnboardingTwoScreen } from './onboarding/OnboardingTwoScreen';
import { OnboardingThreeScreen } from './onboarding/OnboardingThreeScreen';
import { OnboardingFourScreen } from './onboarding/OnboardingFourScreen';
import { NavigationConstants, RootStackParamList } from '../types/navigation';
import { LoginScreen } from './login/LoginScreen';
import { SingupScreen } from './signup/SignUpScreen';
import ChatScreen from './ChatScreen/ChatScreen';
import SettingsScreen from './Settings/SettingsScreen';
import DummyUI from './sample/Sample';
import SampleUI from './sample/ReduxHome';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = ({onboarded}: {onboarded:boolean}) => {
  const screensToRender: Array<{
    name: keyof RootStackParamList;
    component: React.ComponentType<any>;
  }> = [
    {
      name: NavigationConstants.ONBOARDING_ONE,
      component: OnboardingOneScreen,
    },
    {
      name: NavigationConstants.ONBOARDING_TWO,
      component: OnboardingTwoScreen,
    },
    {
      name: NavigationConstants.ONBOARDING_THREE,
      component: OnboardingThreeScreen,
    },
    {
      name: NavigationConstants.ONBOARDING_FOUR,
      component: OnboardingFourScreen,
    },
    {
      name: NavigationConstants.LOGIN,
      component: LoginScreen,
    },
    {
      name: NavigationConstants.SIGNUP,
      component: SingupScreen,
    },
    {
      name: NavigationConstants.DUMMY,
      component: DummyUI,
    },
    {
      name: 'Chat',
      component: ChatScreen,
    },
    {
      name: 'Settings',
      component: SettingsScreen,
    },
    {
      name: NavigationConstants.HOME,
      component: SampleUI,
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={onboarded ? NavigationConstants.LOGIN : NavigationConstants.ONBOARDING_ONE}
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        {screensToRender?.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(AppNavigator);
