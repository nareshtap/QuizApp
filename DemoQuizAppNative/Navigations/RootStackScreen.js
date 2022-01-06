import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import LandingScreen from '../Screens/LandingScreen';
import QuestionScreen from '../Screens/QuestionScreen';

const RootStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          title: 'Question 1',
          headerTitleAlign: 'center',
          headerBackTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
