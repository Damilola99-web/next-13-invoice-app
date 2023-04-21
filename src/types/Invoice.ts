export interface Invoice {
	from: {
		streetAddress: string;
		city: string;
		postalCode: string;
		country: string;
	};
	to: {
		clientName: string;
		clientEmail: string;
		streetAddress: string;
		city: string;
		postalCode: string;
		country: string;
	};
	id: string;
	invoiceDate: Date;
	paymentTerms: number;
	Description: string;
	items: Item[];
	status: 'paid' | 'draft' | 'pending';
}

export interface Item {
	itemName: string;
	qty: number;
	price: number;
	total: number;
}
