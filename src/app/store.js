import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import profileSlice from "./slice/profile.slice";
import packsSlice from "./slice/packs.slice";
import productSlice from "./slice/product.slice";
import depositSlice from "./slice/deposit.slice";
import paymentsSlice from "./slice/payments.slice";
import withdrawSlice from "./slice/withdraw.slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        packs: packsSlice,
        products: productSlice,
        deposits: depositSlice,
        payments: paymentsSlice,
        withdrawals: withdrawSlice,
    },
});

export default store;
