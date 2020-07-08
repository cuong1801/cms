import React from 'react'
import { Tag } from 'antd'
interface StatusTableProps{
    order: any,
}
export default function StatusTable(props:StatusTableProps):JSX.Element {
    return (
        <div>
            <div className="products-status-order">
                <div className="products-status">
                    {props.order.products.map((product: any) => {
                        return (
                            <div>
                                <div className="product-status">
                                    {product.isCancel ? (
                                        <></>
                                    ) : (
                                        <>
                                            <Tag
                                                className="is-payment"
                                                color={product.isPayment === true ? '#87d068' : 'green'}
                                            >
                                                {product.isPayment === true ? 'Đã chuyển tiền' : 'Chưa thanh toán'}
                                            </Tag>
                                            <Tag
                                                className="is-delivery"
                                                color={product.isDelivery === true ? '#108ee9' : 'blue'}
                                            >
                                                {product.isDelivery === true ? 'Đã giao hàng' : 'Chưa Giao hàng'}
                                            </Tag>
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="product-status-order"></div>
        </div>
    )
}
