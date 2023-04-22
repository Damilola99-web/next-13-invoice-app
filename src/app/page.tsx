import Header from '@/components/Header';

import { Invoice as InvoiceTYpe } from '@/types/Invoice';
import type { Metadata } from 'next';
import { Invoice } from '@/components/Invoice';

export const metadata: Metadata = {
	title: 'Rashtech Invoice | Home',
	description: 'Rashtech Invoice App',
};

const invoiceList: InvoiceTYpe[] = [];

export default function Home() {
	return (
		<div className=' px-5 py-8 lg:p-20 w-full max-w-[900px] flex flex-col space-y-6'>
			<Header />
			{invoiceList.map((invoice) => (
				<Invoice
					key={invoice.id}
					invoice={invoice}
				/>
			))}
		</div>
	);
}
