import React, { PureComponent, Fragment } from 'react'
import { Button, Table, Tag, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table/Table'

interface Product {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
}
const columns: ColumnsType<Product> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => text,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
]

const data: Product[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
]

export default class ProductList extends PureComponent {
    state = {
        columns: columns,
        dataSource: [],
    }

    clearFilters = () => {
        this.setState({ filteredInfo: null })
    }

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter)
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        new Promise((resolve) => {
            setTimeout(() => {
                this.setState({ dataSource: data })
                resolve()
            }, 1000)
        })
    }

    render() {
        return (
            <Fragment>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </Space>
                <Table columns={this.state.columns} dataSource={this.state.dataSource} />
            </Fragment>
        )
    }
}
