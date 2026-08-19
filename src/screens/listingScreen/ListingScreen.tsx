import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ListingScreenStyle';
import { useListingScreenController } from './ListingScreenController';

export default function ListingScreen() {
  const {} = useListingScreenController();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Listing Screen</Text>
    </View>
  );
}
