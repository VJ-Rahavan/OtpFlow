// HeaderWithSearch.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  searchQuery: string;
  onSearchChange: (text: string) => void;
};

const HeaderWithSearch = ({ searchQuery, onSearchChange }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity>
          <View style={{ width: 10, height: 10, backgroundColor: '#000' }} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        {/* <Icon name="magnify" size={20} color="#666" style={styles.searchIcon} /> */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  );
};

export default HeaderWithSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
