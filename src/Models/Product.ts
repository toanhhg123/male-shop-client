export interface Product {
    _id?: string;
    productName?: string;
    type?: 'sale' | 'new' | 'hot';
    imageUrl?: string;
    imgs?: string[];
    price?: string;
    rating?: string;
    description?: string;
    quantity?: string;
    color?: string;
    size?: string[];
    brand?: string;
    material?: string;
    warranty?: string;
    origin?: string;
    status?: 'available' | 'unavailable';
}

export interface ProductPage {
    products: Product[];
    page: number;
    pages: number;
}
