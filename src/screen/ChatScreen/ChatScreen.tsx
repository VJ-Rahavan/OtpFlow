import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './ChatScreenStyles';
import { useNavigation } from '@react-navigation/native';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'other';
  name: string;
};

const ChatScreen = () => {
  const chat = useSelector((state: RootState) => state.chatSlice.selectedChat);
  const navigation = useNavigation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey there!',
      sender: 'other',
      name: chat?.name ?? 'Unknown',
    },
    {
      id: '2',
      text: 'Hi! What’s up?',
      sender: 'user',
      name: 'You',
    },
    {
      id: '6',
      text: 'Hey there!',
      sender: 'other',
      name: chat?.name ?? 'Unknown',
    },
    {
      id: '5',
      text: 'Hi! What’s up?',
      sender: 'user',
      name: 'You',
    },
    {
      id: '9',
      text: 'Hey there!',
      sender: 'other',
      name: chat?.name ?? 'Unknown',
    },
    {
      id: '27',
      text: 'Hi! What’s up?',
      sender: 'user',
      name: 'You',
    },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      name: 'You',
    };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
  };

  if (!chat) {
    return (
      <View style={styles.centered}>
        <Text>No chat selected</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{chat.name}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}
        >
          <View style={{ width: 10, height: 10, backgroundColor: '#000' }} />
          {/* <Icon name="dots-vertical" size={24} color="#333" /> */}
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.senderName}>{item.name}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesList}
      />

      {/* Input Field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        // keyboardVerticalOffset={80}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type a message..."
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSend}>
            {/* <Icon name="send" size={24} color="#007AFF" /> */}
            <Text style={{ color: '#007AFF', fontSize: 16 }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
