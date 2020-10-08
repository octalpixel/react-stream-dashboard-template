import React, { Fragment } from 'react'
import Footer from "../footer/Footer"
import { createSwitchRoutes } from '../../../commons/services/helper.service'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PageContainer({ routes }) {
    const switchRoutes = createSwitchRoutes(routes)
    return (

        <Fragment>

            <div className="u-content">
                <div className="u-body" style={{ minHeight: "80vh" }}>
                    <ToastContainer />

                    <div className="card">
                        <div className="card-body">
                            <Switch>
                                {switchRoutes.map(route => route)}
                            </Switch>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </Fragment>
    )
}
