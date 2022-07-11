export interface ProductOrder {
    productId?: string;
    userId?: string;
    qty?: number;
    shippingAddress?: {
        adderss: string;
        city: string;
        postalCode: string;
        country: string;
    };
    paymentMethod?: string;
    taxPrice?: number;
    shippingPrice?: number;
    totailPrice?: number;
    isPaid?: boolean;
    deliveredAt?: Date;
}
