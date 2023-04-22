import { Invoice } from '@/types/Invoice';
import { createSlice } from '@reduxjs/toolkit';
import invoices from '../data.json';

const initialState = { invoices };

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {
		addInvoice(state, action) {},
	},
});

export default invoiceSlice.reducer;
export const getInvoiceList = (state: { invoices: Invoice[] }) => state.invoices;
export const { addInvoice } = invoiceSlice.actions;
