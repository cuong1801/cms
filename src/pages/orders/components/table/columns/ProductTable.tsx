import React from 'react'
interface ProductTableProps {
    order: any
}
export default function ProductTable(props: ProductTableProps): JSX.Element {
    function formatPrice(n, currency) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency
    }
    return (
        <>
            <div className="products-name-order">
                <div className="products-name">
                    {props.order.products.map((product: any) => {
                        return (
                            <div>
                                {product.isCancel ? (
                                    <>
                                        <a className="product-name"></a>
                                    </>
                                ) : (
                                        <>
                                            <a className="product-name">
                                                {product.name}
                                            </a>
                                        </>
                                    )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="money-total-order">
                <div>
                    <span className="total-order">
                       Tổng tiền:
                    </span>
                </div>
            </div>
        </>
       
    )
}
