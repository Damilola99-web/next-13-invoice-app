import { setDrawerOpen } from '@/data/slices/formDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function FormModal() {
	const dispatch = useDispatch();
	// @ts-ignore
	const { formDrawerOpen } = useSelector((state) => state?.drawer);
	return (
		<div
			onClick={() => dispatch(setDrawerOpen(false))}
			className='fixed z-10 flex top-[90px] lg:top-0 left-0 w-full h-screen overflow-hidden bg-black/40'
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`transition-all h-full duration-1000 max-w-[650px] bg-white w-full md:rounded-r-3xl lg:pl-[130px] p-4 lg:p-10`}
			>
				<p className='text-3xl'>Create Invoice</p>
			</div>
		</div>
	);
}
