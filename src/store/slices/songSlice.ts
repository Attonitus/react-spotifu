import { createSlice } from '@reduxjs/toolkit';

interface Song{
    id: string,
    title: string,
    year: string,
    genre: string,
    songAudio: {
        id: number,
        url: string,
        public_id: string
    },
    songImage: {
        id: number,
        url: string,
        public_id: string
    },
    artist: {
        id: string,
        name: string,
        email: string
    }
}

interface InitialStateProps{
    activeSong : Song | null,
    songs: Song[] | null,
    isLoading: boolean,
    error: string | null
}


const initialState: InitialStateProps = {
    activeSong: null,
    songs: null,
    isLoading: false,
    error: null
}

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload;
            state.isLoading = false,
            state.error = null
        },
        setSongs: (state, action) => {
            state.activeSong = action.payload;
            state.isLoading = false,
            state.error = null
        },
        loadingSongs: (state) => {
            state.isLoading = true;
        },
        errorSongs: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setActiveSong, errorSongs, loadingSongs, setSongs } = songSlice.actions;