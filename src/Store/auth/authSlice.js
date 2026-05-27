const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name : 'authSlice',
    initialState:{
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        loading: false,
    },
    reducers: {
        addAuth: (state, action)=>{},
        getAuth: ()=>{},
        logout: ()=>{}
    }

});

export const {addAuth, getAuth} = authSlice.actions
export default authSlice.reducer