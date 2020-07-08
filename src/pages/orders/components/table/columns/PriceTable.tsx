import React from 'react'
interface PriceTableProps {
    order: any
}
export default function PriceTable(props: PriceTableProps): JSX.Element {
    function formatPrice(n) {
        // let tmp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);
    }
    return (
        <>
            <div className="products-price-order">
                <div className="products-price">
                    {props.order.products.map((product: any) => {
                        return (
                            <div>
                                {product.isCancel ? (
                                    <>
                                        <span className="product-price"></span>
                                    </>
                                ) : (
                                        <>
                                            <span className="product-price">{formatPrice(product.price)}</span>
                                        </>
                                    )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="money-total-order">
                <div>
                    <span className="total-order">{formatPrice(props.order.totalAmount)}</span>
                </div>
            </div>
        </>
    )
}
