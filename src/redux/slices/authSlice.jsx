import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API URL (backend'deki `createUser` fonksiyonunun çalıştığı URL)
const API_URL = "https://your-backend.com/api/auth/createUser";

// ➤ Kullanıcı oluşturma isteği
export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ fullname, email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Kullanıcı oluşturulamadı.");
      }
      return data.user; // Backend'den dönen kullanıcı bilgisi
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ➤ Redux Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
