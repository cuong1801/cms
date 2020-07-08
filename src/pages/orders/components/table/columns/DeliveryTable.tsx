import React from 'react'
import {  message, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

interface DeliveryTableProps {
    order: any
}
export default function DeliveryTable(props: DeliveryTableProps): JSX.Element {
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
                                            {product.isDelivery ? (
                                                <>
                                                    <Switch
                                                        autoFocus
                                                        checkedChildren={<CheckOutlined />}
                                                        unCheckedChildren={<CloseOutlined />}
                                                        defaultChecked
                                                        disabled={true}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <Switch
                                                        autoFocus
                                                        checkedChildren={<CheckOutlined/>}
                                                        unCheckedChildren={<CloseOutlined />}
                                                        // style={{ backgroundColor: '#52c41a' }}
                                                        disabled={false}
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
