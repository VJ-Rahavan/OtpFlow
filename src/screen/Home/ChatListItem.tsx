import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

type ChatListItemProps = {
  name: string;
  icon: string;
  isEnabled: boolean;
  onToggle: () => void;
};

const ChatListItem = ({
  name,
  icon,
  isEnabled,
  onToggle,
}: ChatListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupIcon} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Switch
        trackColor={{ false: '#ccc', true: '#4cd137' }}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  groupIcon: {
    backgroundColor: '#f0f',
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
  },
});
