'use client';
import Header from '@/components/Header';
import initialInvoices from '../data/data.json';

import { Invoice as InvoiceTYpe } from '@/types/Invoice';
import type { Metadata } from 'next';
import { Invoice } from '@/components/Invoice';
import { useDispatch, useSelector } from 'react-redux';
import Head from '@/components/Head';
import { useEffect } from 'react';
import { initialLoad } from '@/data/slices/invoice';

export default function Home() {
	// @ts-ignore
	const { filteredInvoices: invoices } = useSelector((state) => state.invoice);

	const dispatch = useDispatch();

	useEffect(() => {
		const localStorageData = localStorage.getItem('invoices');

		if (!localStorageData) {
			localStorage.setItem('invoices', JSON.stringify(initialInvoices));
		}

		dispatch(initialLoad(JSON.parse(localStorageData!) || initialInvoices));
	}, []);
	return (
		<div className=' px-5 py-8 lg:p-20 w-full max-w-[900px] flex flex-col space-y-6'>
			<Head
				title='Rashtech Invoice | Home'
				description='Rashtech Invoice App'
			/>
			<Header />
			<div className='flex flex-col w-full space-y-3'>
				{invoices.map((invoice: InvoiceTYpe) => (
					<Invoice
						key={invoice.id}
						invoice={invoice}
					/>
				))}
			</div>
		</div>
	);
}
