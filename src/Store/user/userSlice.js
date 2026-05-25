import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        profile: null,
        preferences: {},
        wishlist: [],
    },

    reducers: {
        getUser: ()=>{}
    }
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer