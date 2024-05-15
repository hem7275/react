import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  },
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload.userRole;
      state.token = action.payload.jwtToken;
      state.isAuthenticated = true;
      state.isLoading = false;
      sessionStorage.setItem('token', action.payload.jwtToken);
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem('token');
    }
  }
});

export const { signInStart, signInSuccess, signInFailure, signOut } = authSlice.actions;
export default authSlice.reducer;
