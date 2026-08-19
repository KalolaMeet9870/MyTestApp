import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets';
import { useTheme } from '../../theme';
import { getStyles } from './CustomTabBarStyle';
import { useCustomTabBarController } from './CustomTabBarController';
import { Routes } from '../../constants';

export default function CustomTabBar({ state, _descriptors, navigation }: any) {
  const { handleTabPress } = useCustomTabBarController(navigation);
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const onPress = () => handleTabPress(route, isFocused);

          let iconSource = Icons.home;
          if (route.name === Routes.listing) {
            iconSource = Icons.list;
          } else if (route.name === Routes.settings) {
            iconSource = Icons.settings;
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <Image
                source={iconSource}
                style={isFocused ? styles.iconActive : styles.iconInactive}
                resizeMode="contain"
              />
              <Text style={isFocused ? styles.tabLabelActive : styles.tabLabelInactive}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
