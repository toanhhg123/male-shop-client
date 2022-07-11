import React from 'react';

interface Props {
    id?: string;
    img?: string;
    productName?: string;
    price?: string;
    desc?: string;
}

const SearchItem = (props: Props) => {
    const { img, productName, price, desc } = props;

    return (
        <div className="hd__pr-item">
            <div className="hd__pr-img">
                <img src={img} alt="" />
            </div>
            <div className="hd__pr-ct">
                <h3>{productName}</h3>
                <span>${price}</span>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default SearchItem;
