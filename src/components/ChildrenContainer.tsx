'use client';

import { setFilteredInvoices } from '@/data/slices/invoice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormModal from './FormModal';

export default function ChildrenContainer({ children }: { children: React.ReactNode }) {
	// @ts-ignore
	const { formDrawerOpen } = useSelector((state) => state?.drawer);
	// @ts-ignore
	const { filter } = useSelector((state) => state.invoice);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setFilteredInvoices('filter'));
	}, [filter]);
	return (
		<div className='flex w-full justify-center relative'>
			{formDrawerOpen && <FormModal />}
			{children}
		</div>
	);
}
