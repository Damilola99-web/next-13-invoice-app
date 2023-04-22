import React, { Dispatch, SetStateAction, useRef } from 'react';
import useOutsideAlerter from './OutsideAlerter';

export default function Filter({setFilterOpen}:{setFilterOpen : Dispatch<SetStateAction<boolean>>}) {
	const filterRef = useRef<HTMLDivElement>();
	useOutsideAlerter(filterRef, setFilterOpen);
    return (
        // @ts-ignore
		<div ref={filterRef} className='absolute bg-white dark:bg-dark-purple shadow-lg p-8 rounded-lg w-[220px] top-14 leftt flex flex-col space-y-2'>
			<div className='flex space-x-4 items-center'>
				<span className=' flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'></span>
				<p className='font-semibold text-sm'>Paid</p>
			</div>
			<div className='flex space-x-4 items-center'>
				<span className=' flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'></span>
				<p className='font-semibold text-sm'>Pending</p>
			</div>
			<div className='flex space-x-4 items-center'>
				<span className=' flex w-4 h-4 rounded hover:border-deep-purple border-[1px] border-grey bg-grey'></span>
				<p className='font-semibold text-sm'>Draft</p>
			</div>
		</div>
	);
}
