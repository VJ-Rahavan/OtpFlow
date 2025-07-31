import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sampleReducer from './reducers/SampleReducer';

const rootReducer = combineReducers({
  sampleReducer: sampleReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: [], List of reducers to not to persist
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
