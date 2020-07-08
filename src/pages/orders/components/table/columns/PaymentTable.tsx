import React from 'react'
import { Popconfirm, Tag, message, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
interface PaymentTableProps {
    order: any
}
export default function PaymentTable(props: PaymentTableProps): JSX.Element {
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
                                            {product.isPayment ? (
                                                <>
                                                    <Switch
                                                        checkedChildren={<CheckOutlined />}
                                                        unCheckedChildren={<CloseOutlined />}
                                                        defaultChecked
                                                        disabled={true}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {' '}
                                                    <Switch
                                                        checkedChildren={<CheckOutlined />}
                                                        unCheckedChildren={<CloseOutlined />}
                                                    />
                                                </>
                                            )}
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
