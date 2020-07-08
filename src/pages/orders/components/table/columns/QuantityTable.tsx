import React from 'react'
interface QuantityTableProps {
    order: any
}
export default function QuantityTable(props: QuantityTableProps): JSX.Element {
    return (
        <>
            <div className="products-quantity-order">
                <div className="products-quantity">
                    {props.order.products.map((product: any) => {
                        return (
                            <div>
                                {product.isCancel ? (
                                    <>
                                        <span className="product-quantity"></span>
                                    </>
                                ) : (
                                    <>
                                        <span className="product-quantity">{product.quantity}</span>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="quantity-total-order">
                <div>
                    <span className="total-order">
                      {props.order.products.length}
                    </span>
                </div>
            </div>
        </>
    )
}
