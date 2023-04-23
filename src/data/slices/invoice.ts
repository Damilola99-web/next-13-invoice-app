import { Invoice } from '@/types/Invoice';
import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import invoices from '../data.json';

const initialState: {
	invoices: Invoice[];
	filter: null | 'pending' | 'draft' | 'paid';
	filteredInvoices: Invoice[];
} = {
	// @ts-ignore
	invoices,
	filter: null,
	// @ts-ignore
	filteredInvoices: invoices,
};

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {
		changeFilter(state, action) {
			state.filter = action.payload;
		},
		setFilteredInvoices(state, action) {
			if (state.filter) {
				state.filteredInvoices = state.invoices.filter(
					(invoice) => invoice.status === state.filter
				);
			} else {
				state.filteredInvoices = state.invoices;
			}
		},
	},
});

export default invoiceSlice.reducer;

export const { changeFilter, setFilteredInvoices } = invoiceSlice.actions;
