export class ProductSubscription {
    id?: string;
    name?: string;
    features?: string[];
    plans?: Plans[];
}

export class Plans {
    id?: string;
    paymentInterval?: string;
    priceCents?: number;
    currency?: "USD"
}

