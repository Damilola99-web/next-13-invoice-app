import { changeFilter } from '@/data/slices/invoice';
import { Check } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOutsideAlerter from './OutsideAlerter';

export default function Filter({
	setFilterOpen,
	textRef,
}: {
	setFilterOpen: Dispatch<SetStateAction<boolean>>;
	textRef: any;
}) {
	const filterRef = useRef<HTMLDivElement>();
	useOutsideAlerter(filterRef, textRef, setFilterOpen);
	// @ts-ignore
	const { filter } = useSelector((state) => state.invoice);

	const dispatch = useDispatch();
	
	return (
		<div
			// @ts-ignore
			ref={filterRef}
			className='absolute bg-white dark:bg-dark-purple shadow-lg p-8 rounded-lg w-[220px] top-12 leftt flex flex-col space-y-2'
		>
			<div
				onClick={() => {
					if (filter === 'paid') {
						dispatch(changeFilter(null));
					} else {
						dispatch(changeFilter('paid'));
					}
				}}
				className='cursor-pointer flex space-x-4 items-center'
			>
				<span
					style={
						filter === 'paid'
							? { backgroundColor: '#7d5cfa', borderColor: '#7d5cfa' }
							: {}
					}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'paid' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Paid</p>
			</div>

			<div
				onClick={() => {
					if (filter === 'pending') {
						dispatch(changeFilter(null));
					} else {
						dispatch(changeFilter('pending'));
					}
				}}
				className='cursor-pointer flex space-x-4 items-center'
			>
				<span
					style={
						filter === 'pending'
							? { backgroundColor: '#7d5cfa', borderColor: '#7d5cfa' }
							: {}
					}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'pending' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Pending</p>
			</div>

			<div
				onClick={() => {
					if (filter === 'draft') {
						dispatch(changeFilter(null));
					} else {
						dispatch(changeFilter('draft'));
					}
				}}
				className='cursor-pointer flex space-x-4 items-center'
			>
				<span
					style={
						filter === 'draft'
							? { backgroundColor: '#7d5cfa', borderColor: '#7d5cfa' }
							: {}
					}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'draft' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Draft</p>
			</div>
		</div>
	);
}
