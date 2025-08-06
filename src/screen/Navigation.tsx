import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SampleUI from './Home/Home';
import DummyUI from './Sample/Sample';
import ChatScreen from './ChatScreen/ChatScreen';
import SettingsScreen from './Settings/SettingsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const screensToRender = [
    {
      name: 'Home',
      component: SampleUI,
    },
    {
      name: 'Chat',
      component: ChatScreen,
    },
    {
      name: 'Settings',
      component: SettingsScreen,
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        initialRouteName={'Home'}
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
