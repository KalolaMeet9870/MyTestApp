import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets';
import { Colors } from '../../theme/Colors';
import { styles } from './CustomTabBarStyle';
import { useCustomTabBarController } from './CustomTabBarController';

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  const { handleTabPress } = useCustomTabBarController(navigation);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => handleTabPress(route, isFocused);

          let iconSource = Icons.home;
          if (route.name === 'Listing') {
            iconSource = Icons.list;
          } else if (route.name === 'Settings') {
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
                style={[
                  styles.icon,
                  { tintColor: isFocused ? Colors.primary : Colors.tabInactive }
                ]}
                resizeMode="contain"
              />
              <Text style={[styles.tabLabel, { color: isFocused ? Colors.primary : Colors.tabInactive }]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
