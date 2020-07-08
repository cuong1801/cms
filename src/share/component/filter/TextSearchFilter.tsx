import React, { ReactText, ReactNode } from 'react'
import { Input, Space, Button } from 'antd'
import { FilterDropdownProps } from 'antd/lib/table/interface'
import { SearchOutlined } from '@ant-design/icons'
interface TextSearchFilterProps {
    value: ReactText
    confirm: () => void
    clearFilters: () => void
    dataIndex: any
    selectedKeys: string
    setSelectedKeys: (data: any) => void
    onHandleSearch: (selectedKeys: string, confirm: (any) => void, dataIndex: any) => void
    onHandleReset: (clearFilters: (any) => void) => void
}
export default function TextSearchFilter(props: TextSearchFilterProps): JSX.Element {
    // console.log(props.value);
    return (
        <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            // this.searchInput = node;
          }}
          placeholder={`Nhập dữ liêu`}
          value={props.value}

          onChange={(e) => props.setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => props.onHandleSearch(props.selectedKeys, props.confirm, props.dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button onClick={() => props.onHandleReset(props.clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
        // <div style={{ padding: 8 }}>
        //     <Input
        //         value={props.value}
        //         onChange={(e) => props.setSelectedKeys(e.target.value ? [e.target.value] : [])}
        //         onPressEnter={() => props.onHandleSearch(props.selectedKeys, props.confirm, props.dataIndex)}
        //         style={{ width: 188, marginBottom: 8, display: 'block' }}
        //     />
        //     <Space>
        //         <Button onClick={() => props.onHandleReset(props.clearFilters)} size="small" style={{ width: 90 }}>
        //             Reset
        //         </Button>
        //     </Space>
        // </div>
    )
}
