import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {
    id?: String | null;
    type?: String | '';
    imageUrl?: String | '';
    productName?: String | '';
    price?: String | '';
    rate?: String;
}

export const RenderStars = (rate = 0) => {
    return (
        <React.Fragment>
            {[...Array(rate)].map((i, index) => (
                <i key={index} className="bi bi-star-fill"></i>
            ))}
            {[...Array(5 - rate)].map((i, index) => (
                <i key={index} className="bi bi-star"></i>
            ))}
        </React.Fragment>
    );
};

const ProductCard = (props: Props) => {
    const { id, type, imageUrl, productName, price, rate } = props;

    const navigate = useNavigate();

    return (
        <div className="col-6 col-lg-3 col-sm-4">
            <div
                className="prs__card"
                onClick={() => navigate('/shop/product/' + id)}
            >
                <div className="prs-bannel black">{type}</div>
                <div className="prs__card-img">
                    <img src={`${imageUrl}`} alt="" />
                </div>
                <div className="prs__card-content">
                    <h4>{productName}</h4>
                    <div className="prs__icons">
                        {RenderStars(Number(rate))}
                    </div>
                    <h5>${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
