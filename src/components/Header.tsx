'use client';
import { setDrawerOpen } from '@/data/slices/formDrawer';
import { ArrowDown, ArrowDownCircle, ArrowUp, Plus } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Filter from './Filter';

export default function Header() {
	const dispatch = useDispatch();
	const [filterOpen, setFilterOpen] = useState(false);

	return (
		<div className=' w-full flex justify-between items-center'>
			<div className=' flex flex-col'>
				<p className='text-xl md:text-3xl font-bold '>Invoices</p>
				<p className='text-sm lg:text-base text-light-gray'>There are 7 total invoices</p>
			</div>
			<div className=' flex space-x-8 items-center'>
				<div
					onClick={(e) => {
						setFilterOpen(true);
					}}
					className='relative flex space-x-2 items-center'
				>
					<p className='text-sm font-bold cursor-pointer'>
						Filter <span className='hidden md:inline-block'> by status</span>
					</p>
					<span>
						<ArrowUp
							className='cursor-pointer text-deep-purple rotate-180 transition-all duration-300'
							style={
								filterOpen
									? { transform: 'rotate(0deg)' }
									: { transform: 'rotate(180deg)' }
							}
						/>
					</span>
					{filterOpen && <Filter setFilterOpen={setFilterOpen} />}
				</div>
				<div
					onClick={() => dispatch(setDrawerOpen(true))}
					className=' cursor-pointer hover:opacity-80 transition-all duration-200 text-center items-center justify-between p-2 pr-3 space-x-3  flex  rounded-3xl bg-deep-purple h-[45px]'
				>
					<span className=' text-base font-bold flex items-center justify-center text-deep-purple  w-[30px] h-full bg-white rounded-full p-[7px]'>
						<Plus />
					</span>
					<p className='align-middle text-white font-semibold text-sm'>
						New <span className='hidden md:inline-block'> Invoice</span>
					</p>
				</div>
			</div>
		</div>
	);
}
