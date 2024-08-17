import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  StoreData: null,
  loading: false,
  token: Cookies.get("storeToken") ? Cookies.get("storeToken") : null,
};

const storeSlice = createSlice({
  name: "store",
  initialState: initialState,
  reducers: {
    setStoreData(state, action) {
      state.StoreData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      if (action.payload) {
        Cookies.set("storeToken", action.payload, { expires: 7 });
      } else {
        Cookies.remove("storeToken");
      }
    },
    clearToken(state) {
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { setStoreData: setSignupData, setLoading, setToken, clearToken } = storeSlice.actions;

export default storeSlice.reducer;
