import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { Contact } from '../ListingScreenData';

interface ListingItemProps {
  item: Contact;
  styles: any;
}

const ListingItem = ({ item, styles }: ListingItemProps) => {
  const getStatusStyle = (status: Contact['status']) => {
    switch (status) {
      case 'online':
        return styles.statusDotOnline;
      case 'busy':
        return styles.statusDotBusy;
      case 'offline':
      default:
        return styles.statusDotOffline;
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={[styles.statusDot, getStatusStyle(item.status)]} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.roleText}>{item.role}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>{item.email}</Text>
          <Text style={styles.detailText}>{item.phone}</Text>
          <Text style={styles.detailText} numberOfLines={1}>{item.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(ListingItem);
