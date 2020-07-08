import React from 'react'
import { Popconfirm, Tag, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
interface CancelTableProps {
    order: any
}
export default function CancelTable(props: CancelTableProps): JSX.Element {
    function cancel(e) {
        console.log(e)
        message.error('Hủy thao tác')
    }
    return (
        <>
            <div className="products-action-order">
                <div className="products-action">
                    {props.order.products.map((product) => {
                        return (
                            <div>
                                <div className="product-action">
                                    {product.isCancel ? (
                                        <>
                                            <span style={{ width: '102px' }}></span>
                                        </>
                                    ) : (
                                            <>
                                                <Popconfirm
                                                    // onConfirm={() => confirm(order._id, product.productId)}
                                                    onCancel={cancel}
                                                    title="Hủy mặt hàng này?"
                                                    okText="Yes"
                                                    cancelText="No"
                                                >
                                                    <Tag
                                                        className="cancel-order"
                                                        style={{
                                                            display:
                                                                product.isPayment === true || product.isDelivery === true
                                                                    ? 'none'
                                                                    : 'block-inline',
                                                        }}
                                                    >
                                                        <DeleteOutlined
                                                            className="cancel-order"
                                                            style={{
                                                                border: product.isCancel === true ? '0px' : '',
                                                            }}
                                                        />
                                                    </Tag>
                                                </Popconfirm>
                                            </>
                                        )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="product-action-order"></div>
        </>
    )
}
