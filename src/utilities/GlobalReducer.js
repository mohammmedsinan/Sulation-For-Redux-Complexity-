import { createSlice } from "@reduxjs/toolkit";
const initialState = { DarkMode: true,};
const GlobalReducer = createSlice({
  name: "ThemeToggle",
  initialState,
  reducers: { toggle: (state, action) => { state.DarkMode = !state.DarkMode}}
});
export const {toggle} = GlobalReducer.actions;
export default GlobalReducer.reducer;
