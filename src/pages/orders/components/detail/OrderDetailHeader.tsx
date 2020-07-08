import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
const { Title } = Typography
interface OrderDetailHeaderProps {
    order: any
}
export default function OrderDetailHeader(props: OrderDetailHeaderProps):JSX.Element {
    return (
        <>
            <Col span="16">
                <Row>
                    <Title className="order-title" level={4}>
                        CHI TIẾT ĐƠN HÀNG
                    </Title>
                    <span>(Có {props.order.products.length} sản phẩm)</span>
                </Row>
            </Col>
        </>
    )
}
