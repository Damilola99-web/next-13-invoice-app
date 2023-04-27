"use client"
import { Invoice } from '@/types/Invoice';
import { createSlice } from '@reduxjs/toolkit';
import invoices from '../data.json';

const localStorageData = localStorage.getItem('invoices');

if (!localStorageData) {
	localStorage.setItem('invoices', JSON.stringify(invoices));
}

const initialState: {
	invoices: Invoice[];
	filter: null | 'pending' | 'draft' | 'paid';
	filteredInvoices: Invoice[];
} = {
	// @ts-ignore
	invoices: localStorageData ? JSON.parse(localStorageData) : invoices,
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
		addInvoice(state, action) {
			const invoice: Invoice = action.payload;
			state.invoices.push(invoice);
			localStorage.setItem('invoices', JSON.stringify(state.invoices));
		},
		editINvoice(state, action) {
			const { update, id } = action.payload;
			state.invoices.forEach((invoice) => {
				if (invoice.id === id) {
					invoice = { ...invoice, ...update };
				}
			});
			localStorage.setItem('invoices', JSON.stringify(state.invoices));
		},
		deleteInvoice(state, action) {},
	},
});



export default invoiceSlice.reducer;

export const { changeFilter, setFilteredInvoices } = invoiceSlice.actions;
