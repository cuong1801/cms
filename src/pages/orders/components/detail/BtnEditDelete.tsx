import React from 'react'
import { Row, Col, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'


export default function BtnEditDelete(): JSX.Element {
    return (
        <>
            <Col span="8">
                <Row className="row-right-edit-delete">
                    <Button className="order-button" type="primary" icon={<EditOutlined />}>
                        Sửa
                    </Button>
                    <Button className="order-button" type="primary" icon={<DeleteOutlined />}>
                        Xóa
                    </Button>
                </Row>
            </Col>
        </>
    )
}
