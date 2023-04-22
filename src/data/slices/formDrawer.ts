import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formDrawerOpen: false,
};

const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setDrawerOpen(state, action) {
			state.formDrawerOpen = action.payload;
		},
	},
});

export default drawerSlice.reducer;
export const drawerOpen = (state: { formDrawerOpen: boolean }) => state;
export const { setDrawerOpen } = drawerSlice.actions;
