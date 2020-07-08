import React from 'react'
import { PageHeader } from 'antd'

interface HeaderPageProp {
    title: string
    subTitle: string
}
export default function HeaderPage(props: HeaderPageProp): JSX.Element {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={props.title}
                subTitle={props.subTitle}
            ></PageHeader>
        </div>
    )
}
