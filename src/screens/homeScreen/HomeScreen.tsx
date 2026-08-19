import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './HomeScreenStyle';
import { useHomeScreenController } from './HomeScreenController';

export default function HomeScreen() {
  const {} = useHomeScreenController();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}
