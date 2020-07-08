import React from 'react'
import { Space, Popconfirm } from 'antd'
import { Link, Route, useLocation } from 'react-router-dom'
import { IOrder } from '../../../pages/orders/interfaces/IOrder'

interface ActionProps {
    order: IOrder[]
    index: number
    id: string
    onDeleteRecord: (id: string) => void
}

export default function Actions(props: ActionProps): JSX.Element {
    const location = useLocation()
    return (
        <Space size="middle">
            <Link to={{ pathname: `${location.pathname}/detail/${props.id}`, state: props.order }}>
                {props.id+ 1}
            </Link>
        </Space>
    )
}
