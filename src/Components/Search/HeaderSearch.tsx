import React, { useEffect, useState } from 'react';
import { getProducts } from 'src/API/ProductApi';
import { ListReponse } from 'src/Models/Commom';
import { Product } from 'src/Models/Product';

import useDebounce from 'src/Hooks/usedebounce';

import SearchItem from './SearchItem';
interface Props {}

const HeaderSearch = (props: Props) => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const debounceValue = useDebounce<string>(valueSearch, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setProducts([]);
            return;
        }

        setLoadingSearch(true);
        getProducts({ limit: 5, keyword: debounceValue })
            .then((res: ListReponse<Product>) => {
                setProducts(res.data);
                setLoadingSearch(false);
            })
            .catch((e: any) => {
                console.log(e);
            });
    }, [debounceValue]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };

    return (
        <div className="hd__search__show">
            <div className="hd__search__input">
                <input
                    type="text"
                    placeholder="Search.."
                    onChange={handleInput}
                />
                {loadingSearch === false && <i className="bi bi-search"></i>}
                {loadingSearch && (
                    <div
                        className="spinner-grow iconLoading"
                        role="status"
                    ></div>
                )}
            </div>
            <div className="hd__prs__search">
                {products.map((product, i) => (
                    <SearchItem
                        key={i}
                        id={product._id}
                        productName={product.productName}
                        price={product.price}
                        desc={product.description}
                        img={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeaderSearch;
