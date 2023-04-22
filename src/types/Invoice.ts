export interface Invoice {
	id: string;
	createdAt: Date;
	description: string;
	clientName: string;
	clientEmail: string;
	status: 'paid' | 'pending' | 'draft';
	senderAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	clientAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	items: Item[];
	total: number;
}

export interface Item {
	quantity: number;
	price: number;
	total: number;
	name: string;
}
