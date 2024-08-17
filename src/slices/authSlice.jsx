import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  signupData: null,
  loading: false,
  token: Cookies.get("token") ? Cookies.get("token") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      // if (action.payload) {
      //   Cookies.set("token", action.payload, { expires: 7 }); 
      // } else {
      //   Cookies.remove("token");
      // }
    },
    clearToken(state) {
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { setSignupData, setLoading, setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
