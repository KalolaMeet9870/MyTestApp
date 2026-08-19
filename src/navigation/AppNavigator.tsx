import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ListingScreen from '../screens/listingScreen/ListingScreen';
import SettingsScreen from '../screens/settingsScreen/SettingsScreen';
import CustomTabBar from './customTabBar/CustomTabBar';
import { useTheme, moderateScale, horizontalScale } from '../theme';
import { Icons } from '../assets';
import { Routes } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { theme, toggleTheme, isDark } = useTheme();
  const styles = getStyles(theme);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea} edges={Platform.OS === 'android' ? ['top', 'bottom'] : ['bottom']}>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={toggleTheme}
                style={styles.toggleButton}
                activeOpacity={0.7}
              >
                <Image
                  source={isDark ? Icons.sun : Icons.moon}
                  style={styles.toggleIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
          }}
        >
          <Tab.Screen name={Routes.home} component={HomeScreen} />
          <Tab.Screen name={Routes.listing} component={ListingScreen} />
          <Tab.Screen name={Routes.settings} component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const getStyles = (theme: any) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    backgroundColor: theme.cardBackground,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: theme.text,
  },
  toggleButton: {
    marginRight: horizontalScale(16),
    padding: moderateScale(6),
  },
  toggleIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    tintColor: theme.text,
  },
});
