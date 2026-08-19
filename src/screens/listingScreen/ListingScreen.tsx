import React from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './ListingScreenStyle';
import { useListingScreenController } from './ListingScreenController';
import { useTheme } from '../../theme';
import Strings from '../../constants';

export default function ListingScreen() {
  const {} = useListingScreenController();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.LISTING_SCREEN_TITLE}</Text>
    </View>
  );
}
