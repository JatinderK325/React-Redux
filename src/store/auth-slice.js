import { createSlice } from "@reduxjs/toolkit";

// making a brand new state slice for authentication status. 
const authSlice = createSlice({
    name: 'authentication',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// authSlice also exposes an actions which we can use and we will expose them as well,
export const authActions = authSlice.actions;
export default authSlice.reducer;