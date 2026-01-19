import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './types';

import AssetDetailsScreen from '../screens/DetailsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ComponentShowcaseScreen from '../screens/ComponentShowcaseScreen';
import DebugScreen from '../screens/DebugScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen
          name="AssetDetails"
          component={AssetDetailsScreen}
          options={{
            headerShown: true,
            title: 'Asset Details',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: true,
            title: 'Notifications',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="ComponentShowcase"
          component={ComponentShowcaseScreen}
          options={{
            headerShown: true,
            title: 'Component Showcase',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="Debug"
          component={DebugScreen}
          options={{
            headerShown: true,
            title: 'Debug Console',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
