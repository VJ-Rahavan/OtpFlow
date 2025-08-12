// store/chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ChatItem = {
  id: string;
  name: string;
  icon: string;
  isEnabled: boolean;
};

type ChatState = {
  list: ChatItem[];
  selectedChat: ChatItem | null;
};

const initialState: ChatState = {
  list: [],
  selectedChat: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatList: (state, action: PayloadAction<ChatItem[]>) => {
      state.list = action.payload;
    },
    selectChat: (state, action: PayloadAction<ChatItem>) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { setChatList, selectChat } = chatSlice.actions;
export default chatSlice.reducer;
