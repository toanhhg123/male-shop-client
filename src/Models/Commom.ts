export interface PaginationParams {
    Page: number;
    Pages: number;
}

export interface ListReponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface Response<T> {
    data: T;
}

export interface ListParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'desc' | 'asc';
    keyword?: string;
    [key: string]: any;
}
