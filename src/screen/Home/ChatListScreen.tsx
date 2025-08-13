import React, { useMemo, useState } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectChat } from '../../redux/reducers/ChatReducer';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NavigationConstants } from '../../types/navigation';
import ChatListItem from './ChatListItem';
import HeaderWithSearch from './Header';

type ChatItem = {
  id: string;
  name: string;
  icon: string;
  isEnabled: boolean;
};

const initialData: ChatItem[] = [
  {
    id: '1',
    name: 'Team React',
    icon: 'https://example.com/react-group.png',
    isEnabled: false,
  },
  {
    id: '2',
    name: 'Mobile Developers',
    icon: 'https://example.com/mobile-group.png',
    isEnabled: false,
  },
  {
    id: '3',
    name: 'Weekend Runners',
    icon: 'https://example.com/runners-group.png',
    isEnabled: false,
  },
];

const ChatListScreen = () => {
  const [chatList, setChatList] = useState<ChatItem[]>(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleSwitch = (id: string) => {
    setChatList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isEnabled: !item.isEnabled } : item,
      ),
    );
  };

  const handleSelect = (chat: ChatItem) => {
    dispatch(selectChat(chat));
    navigation.navigate(NavigationConstants.CHAT);
  };

  const addNewChat = () => {
    const newId = (chatList.length + 1).toString();
    const newItem: ChatItem = {
      id: newId,
      name: `New Chat ${newId}`,
      icon: 'https://example.com/default-icon.png',
      isEnabled: false,
    };
    setChatList(prev => [...prev, newItem]);
  };

  const filteredChatList = useMemo(() => {
    const lower = searchQuery.toLowerCase();
    return chatList.filter(item => item.name.toLowerCase().includes(lower));
  }, [searchQuery, chatList]);

  return (
    <SafeAreaView style={styles.screen}>
      <HeaderWithSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <View style={styles.screen}>
        <FlatList
          data={filteredChatList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <ChatListItem
                name={item.name}
                icon={item.icon}
                isEnabled={item.isEnabled}
                onToggle={() => toggleSwitch(item.id)}
              />
            </TouchableOpacity>
          )}
        />

        {/* Floating Add Button */}
        <TouchableOpacity style={styles.fab} onPress={addNewChat}>
          <Text style={styles.fabText}>＋</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});
