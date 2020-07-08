import React from 'react'
import { Typography } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Layout, Row, Col, Card, Tag, Popconfirm, Button } from 'antd'
const { Title, Text, Link } = Typography

interface OrderProductDetaiProps {
    order: any
}
export default function OrderProductDetail(props: OrderProductDetaiProps): JSX.Element {
    function formatPrice(n, currency) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency
    }
    return (
        <>
            {props.order.products.map((product) => {
                return (
                    <>
                        <div className="site-card-border-less-wrapper">
                            <Card bordered={false} style={{ width: '100%' }}>
                                <Row>
                                    <Col span={4}>
                                        <img src="" alt="" /> Ảnh Sản Phẩm
                                    </Col>

                                    <Col span={11}>
                                        <Row className="info-product">
                                            <Text className="schane-member" mark>
                                                SchaneMember
                                            </Text>
                                            -
                                            <Link
                                                className="detail-product-name"
                                                href="https://ant.design"
                                                target="_blank"
                                            >
                                                {product.name}
                                            </Link>
                                        </Row>
                                        <Row className="info-product">
                                            <Text className="status-product">Trạng thái:</Text>

                                            {product.isCancel ? (
                                                <>
                                                    <Text className="cancel">Đã hủy</Text>
                                                </>
                                            ) : (
                                                <>
                                                    <Tag
                                                        className="is-payment"
                                                        color={product.isPayment === true ? '#87d068' : 'green'}
                                                    >
                                                        {product.isPayment === true
                                                            ? 'Đã chuyển tiền'
                                                            : 'Chưa thanh toán'}
                                                    </Tag>
                                                    <Tag
                                                        className="is-delivery"
                                                        color={product.isDelivery === true ? '#108ee9' : 'blue'}
                                                    >
                                                        {product.isDelivery === true
                                                            ? 'Đã giao hàng'
                                                            : 'Chưa Giao hàng'}
                                                    </Tag>
                                                </>
                                            )}
                                        </Row>
                                        <Row className="info-product">
                                            <Text className="status-product">Đơn giá:</Text>
                                            <Text className="price">{formatPrice(product.price, 'vnđ')}</Text>
                                        </Row>
                                        <Row className="info-product">
                                            <Text className="status-product">Số lượng:</Text>
                                            <Text>{product.quantity}</Text>
                                        </Row>
                                        <Row className="action-product">
                                            <Text className="status-product">Chức năng:</Text>

                                            {product.isCancel ? (
                                                <>
                                                    <span style={{ width: '102px' }}></span>
                                                </>
                                            ) : (
                                                <>
                                                    <Popconfirm
                                                        title="Mặt hàng này đã thanh toán?"
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Tag
                                                            className="is-payment"
                                                            color={product.isPayment === true ? '' : 'red'}
                                                            style={{
                                                                border: product.isPayment === true ? '0px' : '',
                                                            }}
                                                        >
                                                            {product.isPayment === false ? 'Thanh toán' : ''}
                                                        </Tag>
                                                    </Popconfirm>
                                                    <Popconfirm
                                                        title="Đã giao sản phẩm này?"
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Tag
                                                            className="is-delivery"
                                                            color={product.isDelivery === true ? '' : 'blue'}
                                                            style={{
                                                                border: product.isDelivery === true ? '0px' : '',
                                                            }}
                                                        >
                                                            {product.isDelivery === false ? 'Giao hàng' : ''}
                                                        </Tag>
                                                    </Popconfirm>
                                                    <Popconfirm title="Hủy mặt hàng này?" okText="Yes" cancelText="No">
                                                        <Tag
                                                            className="cancel-order"
                                                            style={{
                                                                display:
                                                                    product.isPayment === true ||
                                                                    product.isDelivery === true
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
                                        </Row>
                                    </Col>
                                    <Col span={5}>
                                        <div>
                                            <span className="count-price">
                                                {/* <span className="count">{product.quantity} </span>x */}
                                                <span className="totalAmount">
                                                    <Text>Tổng tiền:</Text>

                                                    <Title level={4}>{formatPrice(product.totalAmount, 'vnđ')}</Title>
                                                </span>
                                                <span className="totalAmount">
                                                    <Text>Ủng hộ:</Text>

                                                    <Title level={4}>{formatPrice(product.totalDonate, 'vnđ')}</Title>
                                                </span>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>

                        <br />
                    </>
                )
            })}
        </>
    )
}
