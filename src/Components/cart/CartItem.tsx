import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { getProductById } from 'src/API/ProductApi';
import { Product } from 'src/Models/Product';
import { ProductOrder } from 'src/Models/ProductOrder';
import { productOrderDelete } from 'src/features/ProductOrderSlice';
import { updateProductOrder } from 'src/features/ProductOrderSlice';

type Props = {
    productOrder: ProductOrder;
};

const CartItem = (props: Props) => {
    const [product, setProduct] = useState<Product>();
    const { productOrder } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getProduct = async (id: string) => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (productOrder && productOrder.productId)
            getProduct(productOrder.productId);
    }, [productOrder]);

    const handleDelete = () => {
        if (product?._id) dispatch(productOrderDelete(product?._id));
    };
    return (
        <tr>
            <td>
                <div className="pr__if-tb">
                    <div className="pr__if-img">
                        <img src={product?.imageUrl} alt="" />
                    </div>
                    <div className="pr__if-ct">
                        <h5>{product?.productName}</h5>
                        <span>Màu sắc: Họa tiết</span>
                        <span>Size: L</span>
                        <p>Xanh Tím Than</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="prI__qty__input">
                    <button
                        className="prI__icon__plus"
                        onClick={() => {
                            if (
                                productOrder &&
                                productOrder.productId &&
                                productOrder.qty &&
                                productOrder.qty < Number(product?.quantity)
                            )
                                dispatch(
                                    updateProductOrder({
                                        productId: productOrder.productId,
                                        qty: productOrder.qty + 1,
                                        price: Number(product?.price),
                                    })
                                );
                        }}
                    >
                        <i className="bi bi-plus-lg"></i>
                    </button>
                    <input
                        type="text"
                        value={productOrder.qty}
                        onChange={() => {}}
                    />
                    <button
                        className="prI__icon__dash"
                        onClick={() => {
                            if (
                                productOrder &&
                                productOrder.productId &&
                                productOrder.qty &&
                                productOrder.qty > 1
                            )
                                dispatch(
                                    updateProductOrder({
                                        productId: productOrder.productId,
                                        qty: productOrder.qty - 1,
                                        price: Number(product?.price),
                                    })
                                );
                        }}
                    >
                        <i className="bi bi-dash-lg"></i>
                    </button>
                </div>
            </td>
            <td>
                <div className="pr__total-tb">
                    <span>{productOrder.totailPrice}</span>
                    <i onClick={handleDelete} className="bi bi-trash"></i>
                </div>
            </td>
        </tr>
    );
};

export default CartItem;
