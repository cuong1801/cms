import React, { useEffect, useState } from 'react'

import { Table, Input, BackTop, Row, Col } from 'antd'
import axios from 'axios'
import { IOrder, IRecord } from '../interfaces/IOrder'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ColumnsType } from 'antd/lib/table/interface'
import Highlighter from 'react-highlight-words'
import { Statistic } from 'antd'
import { SearchOutlined, HomeOutlined } from '@ant-design/icons'
//component
import TextSearchFilter from '../../../share/component/searchColumn/TextSearchFilter'
import ProductTable from './table/columns/ProductTable'

import DeliveryTable from './table/columns/DeliveryTable'
import PaymentTable from './table/columns/PaymentTable'
import PriceTable from './table/columns/PriceTable'
import DonateTable from './table/columns/DonateTable'
import QuantityTable from './table/columns/QuantityTable'
import OrderDetail from '../OrderDetail'
//css
import 'antd/dist/antd.css'
import '../../orders/styles/OrderBody.scss'
import CancelTable from './table/columns/CancelTable'
const { Search } = Input

const statusFilter = [
    {
        value: 'pending',
        text: 'Hàng đợi',
    },
    {
        value: 'processing',
        text: 'Đang sử lý',
    },
    {
        value: 'completed',
        text: 'Hoàn thành',
    },
    {
        value: 'cancel',
        text: 'Đã hủy',
    },
]
interface OrderState {
    searchText: string
    searchedColumn: string
}
interface pagination {
    top: string
    bottom: string
}
export function OrderBody(): JSX.Element {
    const [state, setState] = useState<OrderState>({
        searchText: '',
        searchedColumn: '',
    })
    const [orders, setOrder] = useState<IOrder[]>([])
    const [records, setRecord] = useState<IRecord>()

    useEffect(() => {
        axios
            .get('http://api.cuongnq.xyz/api/order', {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWY4NWY2M2VlMGU0OWM5ODE4MjczYmMiLCJyb2xlIjoiQSIsImlhdCI6MTU5NDA4NDk5OSwiZXhwIjoxNTk0MTIwOTk5fQ.tYubpDhPhatXzQXb_sPrimBtWAWRBOyGpiO0KIpOFxQ',
                },
            })
            .then((response) => {
                setOrder(response.data.data.orders)
                setRecord(response.data.data.pageInfo)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <TextSearchFilter
                value={selectedKeys[0]}
                setSelectedKeys={setSelectedKeys}
                confirm={confirm}
                clearFilters={clearFilters}
                dataIndex={dataIndex}
                onHandleSearch={handleSearch}
                onHandleReset={handleReset}
                selectedKeys={selectedKeys}
            />
        ),
        filterIcon: (filtered) => {
            return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        },
        onFilter: (value, order) => {
            return dataIndex === 'customer'
                ? order[dataIndex].fullName.toLowerCase().includes(value.toLowerCase())
                : dataIndex === 'products'
                ? order[dataIndex].some((ele) => ele.name.toLowerCase().includes(value.toLowerCase()))
                : order[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        },
        render: (_: any, order: any, index: number) => {
            return state.searchedColumn === order._id ? (
                order._id
            ) : (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={order._id.toString()}
                />
            )
        },
    })
    const columns: ColumnsType<IOrder> = [
        {
            title: 'Mã ĐH',
            dataIndex: '_id',
            key: '_id',
            responsive: ['md', 'lg'],
            width: 150,
            ellipsis: true,
            className: 'xxx',
            onHeaderCell: () => {
                return {
                    style: {
                        color: '#ffffff',
                        background: '#08979c',
                    },
                }
            },
            ...getColumnSearchProps('_id'),
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'customer',
            key: 'customer',
            ellipsis: true,
            width: 200,
            responsive: ['md', 'lg'],
            onHeaderCell: () => {
                return {
                    style: {
                        background: '#08979c',
                        color: '#ffffff',
                    },
                }
            },
            ...getColumnSearchProps('customer'),
            render: (customer: any) => <a>{customer.fullName}</a>,
        },
        {
            title: 'Sản phẩm',
            onHeaderCell: () => {
                return {
                    style: {
                        background: '#08979c',
                        color: '#ffffff',
                    },
                }
            },
            children: [
                {
                    title: 'Tên sản phẩm',
                    dataIndex: 'products',
                    key: 'products',
                    responsive: ['md', 'lg'],
                    ellipsis: true,
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    ...getColumnSearchProps('products'),

                    render: (_: any, record) => {
                        return (
                            <>
                                <ProductTable order={record}></ProductTable>
                            </>
                        )
                    },
                },

                {
                    title: 'SL',
                    dataIndex: 'products',
                    key: 'quanlity',
                    ellipsis: true,
                    width: 60,
                    align: 'right',
                    responsive: ['md', 'lg'],
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    render: (_: any, record) => {
                        return (
                            <>
                                <QuantityTable order={record}></QuantityTable>
                            </>
                        )
                    },
                },
                {
                    title: 'Đơn giá',
                    dataIndex: 'products',
                    key: 'price',
                    ellipsis: true,
                    responsive: ['md', 'lg'],
                    align: 'right',
                    width: 150,
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    render: (_: any, record) => {
                        return (
                            <>
                                <PriceTable order={record}></PriceTable>
                            </>
                        )
                    },
                },
            ],
        },
        {
            title: 'Chức năng',
            dataIndex: 'products',
            filters: statusFilter,
            onFilter: (value: any, record: { status: string | any[] }) => record.status.indexOf(value) === 0,
            onHeaderCell: () => {
                return {
                    style: {
                        background: '#08979c',
                        color: '#ffffff',
                    },
                }
            },
            children: [
                {
                    title: <span style={{ fontSize: '1em' }}>Thanh toán</span>,
                    dataIndex: 'products',
                    key: 'payment',
                    width: 80,
                    responsive: ['md', 'lg'],
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    render: (_: any, record) => <PaymentTable order={record}></PaymentTable>,
                },
                {
                    title: 'Giao hàng',
                    dataIndex: 'products',
                    key: 'delivery',
                    width: 80,
                    responsive: ['md', 'lg'],
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    render: (_: any, record) => (
                        <>
                            <DeliveryTable order={record}></DeliveryTable>
                        </>
                    ),
                },
                {
                    title: 'Hủy',
                    dataIndex: 'products',
                    key: 'cancel',
                    ellipsis: true,
                    width: 65,
                    responsive: ['md', 'lg'],
                    onHeaderCell: () => {
                        return {
                            style: {
                                background: '#08979c',
                                color: '#ffffff',
                            },
                        }
                    },
                    render: (_: any, order: any) => (
                        <>
                            <CancelTable order={order}></CancelTable>
                        </>
                    ),
                },
            ],
        },

        {
            title: 'Ủng hộ ',
            dataIndex: ['products', 'totalDonate'],
            key: 'donate',
            align: 'right',
            onHeaderCell: () => {
                return {
                    style: {
                        background: '#08979c',
                        color: '#ffffff',
                    },
                }
            },
            responsive: ['md', 'lg'],
            width: 150,
            render(_: any, order) {
                return {
                    // props: {
                    //     style: { background: order.color },
                    // },
                    children: <DonateTable order={order}></DonateTable>,
                }
            },
        },
        {
            title: 'Ngày mua',
            dataIndex: 'orderDate',
            key: 'orderDate',
            ellipsis: true,
            onHeaderCell: () => {
                return {
                    style: {
                        background: '#08979c',
                        color: '#ffffff',
                    },
                }
            },
            responsive: ['md', 'lg'],
            sorter: (a: any, b: any) => a.orderDate - b.orderDate,
            render: (_: any, order: any) => {
                console.log(order.orderDate.length)
                return <>{order.orderDate.split('.')[0]}</>
            },
        },
    ]
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setState((s) => ({ searchText: selectedKeys[0], searchedColumn: dataIndex }))
    }
    const handleReset = (clearFilters) => {
        clearFilters()
        setState((s) => ({ searchText: '', searchedColumn: '' }))
    }

    return (
        <>
            <Statistic
                className="count-order"
                value={records?.totalRecords}
                title={'Tổng đơn hàng'}
                valueStyle={{ color: 'white' }}
                prefix={<HomeOutlined />}
            ></Statistic>

            <Table
                id="order-table"
                rowKey={(record) => record._id}
                rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-dark' : 'table-row-light')}
                columns={columns}
                dataSource={orders}
                bordered
                title={() => (
                    //ghi ro rang ma don hang
                    <Search
                        placeholder="input search text"
                        onSearch={(value) => console.log(value)}
                        style={{ width: 200, float: 'right', marginBottom: 20 }}
                    />
                )}
            />
            <Route exact path={'/orders/detail/'} component={OrderDetail} />
        </>
    )
}
