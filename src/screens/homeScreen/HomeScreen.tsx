import React from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './HomeScreenStyle';
import { useHomeScreenController } from './HomeScreenController';
import { useTheme } from '../../theme';
import Strings from '../../constants';

export default function HomeScreen() {
  const {} = useHomeScreenController();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.HOME_SCREEN_TITLE}</Text>
    </View>
  );
}
