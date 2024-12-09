import { createSlice } from '@reduxjs/toolkit';


export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        viewProfile: false
    },
    reducers: {
        setViewProfile: (state ) => {
            state.viewProfile = true;
        },
        setViewHome: (state) => {
            state.viewProfile = false;
        }
    }
});

export const { setViewProfile, setViewHome } = uiSlice.actions;