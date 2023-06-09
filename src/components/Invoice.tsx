import { Invoice as InvoiceType } from '@/types/Invoice';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StatusButton from './StatusButton';
import fns from 'date-fns';

export const Invoice = ({ invoice }: { invoice: InvoiceType }) => {
	return (
		<Link href={`/invoice/${invoice.id}`}>
			<div className=' space-y-4 lg:space-y-0 flex-col md:flex-row flex md:space-x-3 justify-between items-center w-full py-4 px-6 bg-white dark:bg-dark-dark-purple border-[1px] transition-all duration-300 hover:border-purple border-transparent rounded-lg shadow-sm '>
				<div className='w-full flex justify-between md:space-x-4 md:justify-normal items-center'>
					<p className='text-sm font-semibold'>
						<span className='text-light-purple font-semibold'>#</span>
						{invoice.id}
					</p>

					<p className='text-sm text-light-gray'>Due {invoice.paymentDue}</p>
					<p className='hidden md:flex pl-8 text-light-gray'>{invoice.clientName}</p>
				</div>
				<div className='flex md:justify-end md:items-center md:self-end md:space-x-8 justify-between w-full'>
					<div className=' flex flex-col md:flex-row'>
						<p className='md:hidden text-light-gray'>{invoice.clientName}</p>
						<p className='font-semibold text-lg'>
							{new Intl.NumberFormat('en-US', {
								currency: 'USD',
								style: 'currency',
							}).format(invoice.total)}
						</p>
					</div>
					<div className=' flex space-x-5 items-center'>
						<StatusButton status={invoice.status} />
						<ArrowRight className='hidden md:flex text-deep-purple' />
					</div>
				</div>
			</div>
		</Link>
	);
};
