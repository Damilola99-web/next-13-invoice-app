'use client';
import { drawerOpen } from '@/data/slices/formDrawer';
import React from 'react';
import { useSelector } from 'react-redux';
import FormModal from './FormModal';

export default function ChildrenContainer({ children }: { children: React.ReactNode }) {
	// @ts-ignore
	const { formDrawerOpen } = useSelector((state) => state?.drawer);
	return (
		<div className='flex w-full justify-center relative'>
			{formDrawerOpen && <FormModal />}
			{children}
		</div>
	);
}
