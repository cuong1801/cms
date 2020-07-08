import React from 'react'
import { Typography } from 'antd'
import { Row, Col, Card } from 'antd'

const { Text } = Typography
interface InforUserOrderProps {
    title: any
    value: any

}
export default function InforUserOrder(props: InforUserOrderProps): JSX.Element {
    return (
        <>
            <Card className="card-info-user">
                <Row>
                    <Col span={6}>
                        <Text className="user-name">{props.title}:</Text>
                    </Col>
                    <Col span={18}>{props.value}</Col>
                </Row>
            </Card>
        </>
    )
}
