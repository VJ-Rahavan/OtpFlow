import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sampleReducer from './reducers/SampleReducer';
import chatSlice from './reducers/ChatReducer';

const rootReducer = combineReducers({
  sampleReducer: sampleReducer,
  chatSlice: chatSlice,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['chatSlice'], //List of reducers to not to persist
  },
  rootReducer,
);

const customizedMiddleware = (
  getDefaultMiddleware: (arg0: { serializableCheck: boolean }) => any,
) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  });
};

export const storex = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
  devTools: true,
});

export type RootState = ReturnType<typeof storex.getState>;
export type AppDispatch = typeof storex.dispatch;

export const persistor = persistStore(storex);
