import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        // I can add more reducers here for updating and deleting if I get the time
    },
});

export const { setProfile } = userSlice.actions

export default userSlice.reducers