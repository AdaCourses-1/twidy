import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import chatReducer from './features/chat/chatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['user/setUser'],
        // Ignore these field paths in all actions
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['user.info'],
      },
    }),
});
