import React from 'react';
import { pages as PagesReducer } from 'src/features/ProductSlice';
import { useAppSelector } from 'src/app/hooks';
import { useParams } from 'react-router-dom';
import RenderPagination from './RenderPagination';

type Props = {};

const Pagination = (props: Props) => {
    let pages = useAppSelector(PagesReducer) || 0;
    const page = useParams().page || 1;

    return <RenderPagination page={Number(page)} pages={pages} />;
};

export default Pagination;
