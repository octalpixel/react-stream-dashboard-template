import React, { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { withResizeDetector } from 'react-resize-detector'
import layoutService from '../../../commons/services/layout.service'

function SidebarComponent({width,height}) {

    const history =  useHistory()
    
    const logoutUser = () => {
        localStorage.clear()
        setTimeout(() => {
            window.location.href = "/"
        }, 500)
    }

    const handleNavigation = (route) => {

        if(width <=557){
            layoutService.handleMobileMenu(false)
        }
       
        history.push({pathname:route})

    }

    return (
        <Fragment>
            <aside id="sidebar" className="u-sidebar">
                <div className="u-sidebar-inner">
                    <nav className="u-sidebar-nav">
                        <ul className="u-sidebar-nav-menu u-sidebar-nav-menu--top-level">

                            <li className="u-sidebar-nav-menu__item">
                                <Link className="u-sidebar-nav-menu__link" onClick={() => handleNavigation("/lists")}>
                                    <i className="fa fa-cubes u-sidebar-nav-menu__item-icon"></i>
                                    <span className="u-sidebar-nav-menu__item-title">SideBar Name</span>
                                </Link>

                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </Fragment>
    )
}

const Sidebar =  withResizeDetector(SidebarComponent)

export default Sidebar
