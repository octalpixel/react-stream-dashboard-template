import React, { Fragment } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import PageContainer from './components/page-container/PageContainer'

export default function Layout({ routes }) {
    return (
        <Fragment>
            <Header></Header>
            <main className="u-main" role="main">
                <Sidebar />
                <PageContainer routes={routes} />
            </main>
        </Fragment>
    )
}
