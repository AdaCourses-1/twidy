import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChat: null,
  chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { setChat, setChats } = chatSlice.actions;
export default chatSlice.reducer;