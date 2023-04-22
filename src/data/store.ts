import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './slices/formDrawer';
import invoiceReducer from './slices/invoice';
// import rootReducer from './reducers'

const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		invoice: invoiceReducer,
	},
});

export default store;
