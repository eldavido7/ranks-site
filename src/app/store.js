import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import profileSlice from "./slice/profile.slice";
import packsSlice from "./slice/packs.slice";
import productSlice from "./slice/product.slice";
import depositSlice from "./slice/deposit.slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        packs: packsSlice,
        products: productSlice,
        deposits: depositSlice,
    },
});

export default store;
