import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ListingScreen from '../screens/listingScreen/ListingScreen';
import SettingsScreen from '../screens/settingsScreen/SettingsScreen';
import CustomTabBar from './customTabBar/CustomTabBar';
import { Colors } from '../theme/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.white,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.border,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16,
              color: Colors.text,
            },
            headerTitleAlign: 'center',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Listing" component={ListingScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
