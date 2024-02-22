import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // save data inside the local storage of the browser

// Import the global reducer
import globalReducer from './dashboard/index.js';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer, // Add the global reducer here
});

// Define persist config
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Pass the persistedReducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor
export const persistor = persistStore(store);
