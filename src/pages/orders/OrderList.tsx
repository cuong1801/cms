import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { OrderBody } from './components/Body'
import HeaderPage from '../../share/component/header/HeaderPage'
import { Layout } from 'antd'
import './styles/order.css'

// import { IOrder } from "../../interfaces/IOrder";
export function OrderList(): JSX.Element {
    return (
        <Fragment>
            <HeaderPage title="Đơn hàng" subTitle="Danh sách đơn hàng"></HeaderPage>
            <OrderBody></OrderBody>
        </Fragment>
    )
}
