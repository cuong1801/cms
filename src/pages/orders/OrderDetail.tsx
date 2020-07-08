import React from 'react'
import 'antd/dist/antd.css'
import HeaderPage from '../../share/component/header/HeaderPage'
import { Layout, Row, Col, Card, Tag, Popconfirm, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import { Typography } from 'antd'
import { IOrder } from './interfaces/IOrder'
import './styles/OrderDetail.scss'
import OrderDetailHeader from './components/detail/OrderDetailHeader'
import BtnEditDelete from './components/detail/BtnEditDelete'
import OrderProductDetail from './components/detail/OrderProductDetail'
import InforUserOrder from './components/detail/InforUserOrder'
const { Title, Text, Link } = Typography

export default function OrderDetail() {
    const location = useLocation<IOrder>()
    const order = location.state
    function formatPrice(n, currency) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency
    }
    return (
        <Layout style={{ minHeight: '50vh' }}>
            <HeaderPage title="Đơn hàng" subTitle="Danh sách đơn hàng / Chi tiết đơn hàng"></HeaderPage>
            <Row className="order-row">
                <OrderDetailHeader order={order}></OrderDetailHeader>
                <BtnEditDelete></BtnEditDelete>
            </Row>
            <Row>
                <Col span="14" className="detail-left">
                    <OrderProductDetail order={order}></OrderProductDetail>
                </Col>
                <Col span="9" className="detail-right">
                    <Card>
                        <InforUserOrder title="Khách hàng" value={order.customer.fullName}></InforUserOrder>
                    </Card>
                    <Card>
                        <InforUserOrder title="Địa chỉ" value=''></InforUserOrder>
                    </Card>
                    <Card>
                        <InforUserOrder title="Điện thoại" value=''></InforUserOrder>
                    </Card>
                    <Card>
                        <InforUserOrder title="Mã đơn hàng" value={order._id}></InforUserOrder>
                    </Card>
                    <Card>
                        <InforUserOrder title="Tổng tiền" value={formatPrice(order.totalAmount, "đ")}></InforUserOrder>
                    </Card>
                    <Card>
                        <InforUserOrder title="Ủng hộ" value={formatPrice(order.totalDonate, "đ")}></InforUserOrder>
                    </Card>
                    ,
                </Col>
            </Row>
        </Layout>
    )
}
