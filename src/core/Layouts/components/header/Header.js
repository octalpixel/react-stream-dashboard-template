import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withResizeDetector } from 'react-resize-detector'
import { useEffect } from 'react'
import { useState } from 'react'
import layoutService from '../../../commons/services/layout.service'

 const HeaderComponent = ({width,height}) => {
    
    const [openMenu, setOpenMenu] =  useState(false)

    const logoutUser = () => {

        if (window.confirm('Are you sure you want to logout ?')) {
            localStorage.clear()
            setTimeout(() => {
                window.location.href = "/login"
            }, 500)
        }
    }

    const toggleMenu = () => setOpenMenu(!openMenu)

    useEffect(() =>{
        layoutService.handleMobileHeader(width)
        setOpenMenu(false)
    },[width])

    useEffect(() =>{
        layoutService.handleMobileMenu(openMenu)
    },[openMenu])



    return (
       
        <Fragment>
            <header className="u-header">
                <div className="u-header-left">
                    <Link to="/" className="u-header-logo">
                        <img className="u-logo-desktop pad-logo" src="/assets/images/black-logo.png" width="130" alt="" />
                        <img className="img-fluid u-logo-mobile" src="/assets/images/black-logo.png" width="100" alt="" />
                    </Link>

                </div>

                <div class="u-header-middle">
				<a onClick={toggleMenu} id="mobile-menu-invoker" class="js-sidebar-invoker u-sidebar-invoker" >
					<i class="fa fa-bars u-sidebar-invoker__icon--open"></i>
					<i class="fa fa-times u-sidebar-invoker__icon--close"></i>
				</a>
			</div>

                <div className="u-header-right">

                    <div className="dropdown mr-4">


                    </div>

                    {/* <div className="dropdown mr-4">
                        <span style={{ "cursor": "pointer" }} className="u-sidebar-nav-menu__link" onClick={logoutUser} >
                            <i className="fa fa-sign-out u-sidebar-nav-menu__item-icon"></i>
                            <span className="u-sidebar-nav-menu__item-title">Logout</span>
                        </span>

                    </div> */}

                </div>

            </header>
        </Fragment>
    )
}

const Header =  withResizeDetector(HeaderComponent)
export default Header
