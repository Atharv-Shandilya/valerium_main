"use client";

import { configureStore } from "@reduxjs/toolkit";

import SignupSlice from "./slice/SignupSlice.js";
import chainSlice from "./slice/chainSlice.js";
import userSlice from "./slice/UserSlice.js";
import selectorSlice from "./slice/selectorSlice.js";
import proofSlice from "./slice/proofSlice.js";

export const store = configureStore({
  reducer: {
    chain: chainSlice,
    signup: SignupSlice,
    user: userSlice,
    selector: selectorSlice,
    proof: proofSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
