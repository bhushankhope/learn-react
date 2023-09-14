const { configureStore } = require("@reduxjs/toolkit");
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // This key is used to store data in localStorage. You can change it to something else if needed.
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const appStore = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(appStore);

export default appStore;
 