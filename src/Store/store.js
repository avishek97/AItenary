const { configureStore } = require("@reduxjs/toolkit");
import authSlice from './auth/authSlice';
import userSlice from './user/userSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
    }
})