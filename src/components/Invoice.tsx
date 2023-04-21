import { Invoice as InvoiceType } from '@/types/Invoice';
import Link from 'next/link';

export const Invoice = ({ invoice }: { invoice: InvoiceType }) => {
	return <Link href={`/invoice/${invoice.id}`}>hey</Link>;
};
