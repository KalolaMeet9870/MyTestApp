import React, { useCallback } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import { getStyles } from './ListingScreenStyle';
import { useListingScreenController } from './ListingScreenController';
import { useTheme } from '../../theme';
import Strings from '../../constants';
import ListingItem from './listItemCard/ListingItem';
import { Contact } from './ListingScreenData';

export default function ListingScreen() {
  const { searchQuery, handleSearchChange, filteredContacts } = useListingScreenController();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderItem = useCallback(
    ({ item }: { item: Contact }) => <ListingItem item={item} styles={styles} />,
    [styles]
  );

  const keyExtractor = useCallback((item: Contact) => item.id, []);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, [styles]);

  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{Strings.NO_RESULTS_FOUND}</Text>
      </View>
    ),
    [styles]
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={Strings.SEARCH_PLACEHOLDER}
          placeholderTextColor={theme.inputPlaceholder}
          value={searchQuery}
          onChangeText={handleSearchChange}
          clearButtonMode="while-editing"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
