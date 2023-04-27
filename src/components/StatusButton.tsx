import React from 'react';

export default function StatusButton({ status }: { status: 'paid' | 'pending' | 'draft' }) {
	if (status === 'paid') {
		return (
			<button
				style={{ backgroundColor: '#33d69f20' }}
				className='flex space-x-3 justify-center items-center text-center text-greeen w-[120px] h-[43px] px-5 py-2 rounded-md'
			>
				<span className=' w-2 h-2 rounded-full bg-greeen'></span>
				<p className='text-sm font-semibold'>Paid</p>
			</button>
		);
	}
	if (status === 'pending') {
		return (
			<button
				style={{ backgroundColor: '#ff8f0020' }}
				className='flex space-x-3 justify-center items-center text-center text-orange w-[120px] h-[43px] px-5 py-2 rounded-md'
			>
				<span className=' w-2 h-2 rounded-full bg-orange'></span>
				<p className='text-sm font-semibold'>Pending</p>
			</button>
		);
	}
	if (status === 'draft') {
		return (
			<button className='flex space-x-3 justify-center items-center text-center text-grey w-[120px] h-[43px] px-5 py-2 rounded-md dark:bg-grey/10 bg-dark-purple/10'>
				<span className=' w-2 h-2 rounded-full bg-black dark:bg-grey'></span>
				<p className=' text-black dark:text-grey text-sm font-semibold'>Draft</p>
			</button>
		);
	} else {
		return (
			<button
				style={{ backgroundColor: '#dfe3fa10' }}
				className='flex space-x-3 justify-center items-center text-center text-grey w-[120px] h-[43px] px-5 py-2 rounded-md'
			>
				<span className=' w-2 h-2 rounded-full bg-grey'></span>
				<p>Draft</p>
			</button>
		);
	}
}
