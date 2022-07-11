import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    page: number;
    pages: number;
}

const RenderPagination = ({ page, pages }: Props) => {
    return (
        <React.Fragment>
            <div className="pagination d-flex justify-content-center">
                <Link to={`/shop/${page - 1 || 1}`}>pre</Link>

                {page > 3 && (
                    <Link className="pg__item" to={'/shop/1'}>
                        {1}
                    </Link>
                )}
                {page > 3 && (
                    <Link className="pg__item" to={'#'}>
                        ...
                    </Link>
                )}
                {page - 2 > 0 && (
                    <Link className="pg__item" to={`/shop/${page - 2}`}>
                        {page - 2}
                    </Link>
                )}
                {page - 1 > 0 && (
                    <Link className="pg__item" to={`/shop/${page - 1}`}>
                        {page - 1}
                    </Link>
                )}
                <Link className="pg__item active" to={`/shop/${page}`}>
                    {page}
                </Link>
                {page + 1 <= pages && (
                    <Link className="pg__item" to={`/shop/${page + 1}`}>
                        {page + 1}
                    </Link>
                )}
                {page + 2 <= pages && (
                    <Link className="pg__item" to={`/shop/${page + 2}`}>
                        {page + 2}
                    </Link>
                )}

                {page + 3 <= pages && (
                    <Link className="pg__item" to={'#'}>
                        ...
                    </Link>
                )}
                {page + 3 <= pages && (
                    <Link className="pg__item" to={`/shop/${pages}`}>
                        {pages}
                    </Link>
                )}
                <Link
                    className="pg__item"
                    to={`/shop/${page + 1 < pages ? page + 1 : pages}`}
                >
                    next
                </Link>
            </div>
        </React.Fragment>
    );
};

export default RenderPagination;
