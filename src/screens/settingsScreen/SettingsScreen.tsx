import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './SettingsScreenStyle';
import { useSettingsScreenController } from './SettingsScreenController';

export default function SettingsScreen() {
  const {} = useSettingsScreenController();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}
