import { useState, useMemo, useCallback } from 'react';
import { mockContacts, Contact } from './ListingScreenData';

export const useListingScreenController = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const filteredContacts = useMemo<Contact[]>(() => {
    if (!searchQuery.trim()) {
      return mockContacts;
    }
    const lowerQuery = searchQuery.toLowerCase().trim();
    return mockContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowerQuery) ||
        contact.role.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return {
    searchQuery,
    handleSearchChange,
    filteredContacts,
  };
};
