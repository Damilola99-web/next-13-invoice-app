import { Check } from 'lucide-react';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import useOutsideAlerter from './OutsideAlerter';

export default function Filter({
	setFilterOpen,
}: {
	setFilterOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const filterRef = useRef<HTMLDivElement>();
	useOutsideAlerter(filterRef, setFilterOpen);
	const [filter, setFilter] = useState<'paid' | 'pending' | 'draft' | null>(null);
	return (
		<div
			// @ts-ignore
			ref={filterRef}
			className='absolute bg-white dark:bg-dark-purple shadow-lg p-8 rounded-lg w-[220px] top-12 leftt flex flex-col space-y-2'
		>
			<div className='flex space-x-4 items-center'>
				<span
					style={filter === 'paid' ? { backgroundColor: '#7d5cfa' } : {}}
					onClick={() => setFilter('paid')}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'paid' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Paid</p>
			</div>

			<div className='flex space-x-4 items-center'>
				<span
					style={filter === 'pending' ? { backgroundColor: '#7d5cfa' } : {}}
					onClick={() => setFilter('pending')}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'pending' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Pending</p>
			</div>

			<div className='flex space-x-4 items-center'>
				<span
					style={filter === 'draft' ? { backgroundColor: '#7d5cfa' } : {}}
					onClick={() => setFilter('draft')}
					className=' items-center justify-center p-[2px] flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'
				>
					{filter === 'draft' && <Check className='text-white font-bold' />}
				</span>
				<p className='font-semibold text-sm'>Draft</p>
			</div>
		</div>
	);
}
