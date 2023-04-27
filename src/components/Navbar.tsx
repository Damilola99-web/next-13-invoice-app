// import {} from ""

import { Dispatch, SetStateAction } from 'react';
import Overlay from './Overlay';
import ThemeToggle from './ThemeToggle';

export default function Navbar({
	setModalOpen,
}: {
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div className=' sticky top-0 z-20 dark:bg-dark-dark-purple bg-dark-purple w-full lg:w-[100px] h-[90px] lg:flex-col lg:h-full lg:min-h-screen lg:rounded-r-3xl flex justify-between'>
			<div className='h-full w-[90px] lg:w-full lg:h-[100px] bg-purple rounded-r-3xl flex items-center justify-center p-8'>
				<img
					src='/logo.svg'
					alt=''
					className='w-full'
				/>
			</div>
			<div className=' h-full flex flex-row lg:flex-col items-center'>
				<div className='p-5'>
					<ThemeToggle />
				</div>
				<span className='bg-light-purple w-[1px] lg:w-full lg:h-[1px] h-full'></span>
				<div className='p-5 w-[80px] rounded-full'>
					<img
						onClick={() => setModalOpen(true)}
						className='cursor-pointer w-full rounded-full border-0 border-purple'
						src='/rasheed.jpg'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}
