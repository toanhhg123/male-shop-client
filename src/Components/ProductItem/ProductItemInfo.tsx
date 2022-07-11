import { useRef, useState } from 'react';
import { Product } from 'src/Models/Product';
import ProductDesciption from './ProductDesciption';
import { RenderStars } from 'src/Components/HomeProduct/ProductCard';
import { useAppSelector } from 'src/app/hooks';
import { isAuthenticated } from 'src/features/AuthFile/Auth';
import { ToastContainer, toast, Id, ToastContentProps } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { orderProductRequest } from 'src/features/ProductOrderSlice';

const ProductItemInfo = (props: Props) => {
    const dispatch = useAppDispatch();
    const [qty, setQty] = useState<number>(1);
    const [acticeSize, setActiveSize] = useState(0);
    const isLoin = useAppSelector(isAuthenticated);
    const _id = props.product?._id;
    const productName = props.product?.productName;
    const price = props.product?.price;
    const size = props.product?.size || [];
    const rating = props.product?.rating || 0;
    const location = useLocation();
    const toastId = useRef<Id | any>(null);

    const addTocart = () => {
        if (!isLoin) {
            if (toastId.current) toast.dismiss(toastId.current);
            toastId.current = toast.warning(
                <Msg
                    message="please Login"
                    to={`/login/?redirect=${location.pathname}`}
                />
            );
        } else {
            if (_id)
                dispatch(
                    orderProductRequest({
                        productId: _id,
                        qty: qty,
                        totailPrice: Number(price) * qty,
                    })
                );
        }
    };

    return (
        <div className="proItem__if">
            <ToastContainer />
            <h2>{productName}</h2>
            <div className="proItem__id__rt">
                <div className="prI__rt">
                    {RenderStars(Number(rating))}
                    <span>(0 đánh giá)</span>
                </div>
            </div>
            <h3 className="price">${price}</h3>
            <div className="prI__color">
                <h3>Màu sắc: Xanh Cổ Vịt Đậm</h3>
                <div className="prI__color__select">
                    <button className="bg-primary text-white">
                        <i className="bi bi-check"></i>
                    </button>
                    <button className="bg-black"></button>
                </div>
            </div>
            <div className="prI__size">
                <div className="prI__size__btns">
                    {size.map((s, i) => (
                        <button
                            className={acticeSize === i ? 'active' : ''}
                            key={i}
                            onClick={() => setActiveSize(i)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="prI__checkSize">
                    <i className="bi bi-eraser"></i>
                    <p>Kiểm tra size của bạn</p>
                </div>
            </div>

            <div className="prI__qty">
                <p>Số lượng</p>
                <div className="prI__qty__input">
                    <button
                        className="prI__icon__plus"
                        onClick={() => setQty((pre) => pre + 1)}
                    >
                        <i className="bi bi-plus-lg"></i>
                    </button>
                    <input type="text" value={qty} onChange={() => null} />
                    <button
                        className="prI__icon__dash"
                        onClick={() =>
                            setQty((pre) => (pre - 1 < 1 ? pre : pre - 1))
                        }
                    >
                        <i className="bi bi-dash-lg"></i>
                    </button>
                </div>
            </div>

            <div className="prI__btns">
                <button className="active addToCart" onClick={addTocart}>
                    Thêm vào giỏ hàng
                </button>
                <button className="buy__pr">Mua Hàng</button>
                <button className="iconHearth">
                    <i className="bi bi-suit-heart"></i>
                </button>
            </div>

            <ProductDesciption />
        </div>
    );
};

interface PropsMsg {
    toastContent?: ToastContentProps;
    message: string | '';
    to?: string;
}

const Msg = (props: PropsMsg) => {
    return (
        <div className="toast__show">
            <span>{props.message}</span>
            <Link to={props.to || '/'}>
                <i className="bi bi-arrow-right"></i>
            </Link>
        </div>
    );
};

interface Props {
    product?: Product;
}
export default ProductItemInfo;
