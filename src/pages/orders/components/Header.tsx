import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import { Typography } from 'antd'
import '../../orders/styles/order.css'
import { Statistic } from 'antd';
const { Title } = Typography
const OrderHeader = (): JSX.Element => {
    return (
                    <Statistic title="Active Users" value={112893} />
    )
}
export default OrderHeader
