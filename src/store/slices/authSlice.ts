import { createSlice } from '@reduxjs/toolkit';

interface User {
    name: string,
    id: string,
    email: string
}

interface InitialStateProps {
    status: 'no-auth' | 'checking' | 'auth',
    user: User | null,
    error: string | null
}


const initialState : InitialStateProps = {
    status: 'no-auth',
    user: null,
    error: null 
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action ) => {
            state.status = "auth";
            state.user = action.payload;
        },
        logout: (state, action?) => {
            state.status = "no-auth";
            state.user = null;
            state.error = action? action.payload : null
        },
        checking: (state) => {
            state.status = "checking";
        },

    }
});

export const { login, logout, checking } = authSlice.actions;