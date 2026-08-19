import React from 'react';
import { Text, View, Switch } from 'react-native';
import { getStyles } from './SettingsScreenStyle';
import { useSettingsScreenController } from './SettingsScreenController';
import { useTheme } from '../../theme';
import Strings from '../../constants';

export default function SettingsScreen() {
  const {} = useSettingsScreenController();
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.SETTINGS_SCREEN_TITLE}</Text>
      
      <View style={styles.switchContainer}>
        <Text style={styles.label}>{Strings.DARK_MODE}</Text>
        <Switch
          trackColor={{ false: theme.border, true: theme.primaryLight }}
          thumbColor={isDark ? theme.primary : '#F4F3F4'}
          ios_backgroundColor={theme.border}
          onValueChange={toggleTheme}
          value={isDark}
        />
      </View>
    </View>
  );
}
