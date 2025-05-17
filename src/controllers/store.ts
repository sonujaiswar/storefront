import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settings"; // example slice
import cartReducer from "./slices/cart"; // example slice

// store.ts
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  settings: settingsReducer,
  cart: cartReducer,
  // Add more slices here
});

// Custom Noop Storage
const noopStorage = {
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {},
};
const persistConfig = {
  key: "root",
  storage: noopStorage,

  whitelist: ["settings"], // Only persist specific slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
