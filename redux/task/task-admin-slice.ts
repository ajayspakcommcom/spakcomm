// dataSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

// Define your state type
interface DataState {
    data: any | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string;
    token: string;
}

// Define an initial state
const initialState: DataState = {
    data: null,
    status: 'idle',
    error: '',
    token: ''
};

// Define your async thunk function
export const getTask = createAsyncThunk('get/getTasks', async (token: string) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const response = await axios.get(`${publicRuntimeConfig.API_URL}task`, config);
    console.log(response);
    return response;
});

// Create a slice
const taskAdminSlice = createSlice({
    name: 'adminTask',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            //state.data.token = action.payload;
        },
        logout: (state) => {
            state.token = '';
            state.data = '';
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userData');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTask.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.data.token;
                state.data = action.payload.data.user;
                localStorage.setItem('jwtToken', state.token);
                localStorage.setItem('userData', JSON.stringify(state.data));
            })
            .addCase(getTask.rejected, (state, action) => {
                state.status = 'failed';
                state.token = '';
                state.data = '';
            });
    },
});

export const { setToken, logout } = taskAdminSlice.actions;
export default taskAdminSlice.reducer;
