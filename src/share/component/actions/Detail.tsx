import React from 'react'
import { Link } from 'react-router-dom'
interface DetailProps {
    order: any
    index: number
}
export default function detail(props: DetailProps): JSX.Element {
    return (
        <>
            <a href={'/orders/detail/' + props.order._id} className="detail-order">
                <Link to={'/orders/detail/' + props.order._id}>{props.index + 1}</Link>
            </a>
        </>
    )
}
