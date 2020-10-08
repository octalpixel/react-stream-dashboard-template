import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { userService } from '../../../../core/commons/services/entity-services/user.service'

// keywordService


export default class LoginPage extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            error: ""
        }
    }


    handleValueChange = (event) => {
        const { name, value } = event.target
        console.log(event.target);
        console.log(`${name} : ->`, value);
        this.setState({ [name]: value })
    }

    updateError = (error) => {
        setTimeout(() => this.setState({ error }), 500)
    }

    setLoading = (isLoading) => {
        setTimeout(() => this.setState({ isLoading }), 500)
    }

    handleLogin = async () => {
        this.updateError(null)
        this.setLoading(true)
        const { username, password } = this.state

        const handleLogin = await userService.login({ username, password })
        if (!handleLogin.success) {
            this.updateError(handleLogin.msg)
            this.setLoading(false)
            return
        }
        userService.adddUserInfo(handleLogin.data)
        // console.log(handleLogin);
        setTimeout(() => window.location.href = "/lists", 1000)
    }

    render() {


        const { username, password, isLoading, error } = this.state

        return (
            <main className="container-fluid w-100" role="main">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 d-flex flex-column justify-content-center align-items-center bg-white mnh-100vh">

                        <div className="u-login-form">
                            <form className="mb-3" action="/">
                                <div className="mb-3">
                                    <h1 className="h2">Hello!</h1>
                                    <p className="small">Login to your dashboard with your registered username and password.</p>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="username">Your Username</label>
                                    <input id="username" className="form-control" name="username" type="text" placeholder="johndoe" onChange={this.handleValueChange} />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" className="form-control" name="password" type="password" placeholder="Your password" onChange={this.handleValueChange} />
                                </div>


                                {(error) ? <p className="text-danger">{error}</p> : ""}


                                <button disabled={isLoading} className="btn btn-primary btn-block" type="button" onClick={this.handleLogin}>
                                    {isLoading ? (<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>) : ""}
									Login</button>

                            </form>

                            <p className="small">
                                Don’t have an account? <Link to="/register">Sign Up here</Link>
                            </p>
                        </div>

                        {/* <div className="u-login-form text-muted py-3 mt-auto">
                            <small><i className="far fa-question-circle mr-1"></i> If you are not able to sign in, please <a href="#">contact us</a>.</small>
                        </div> */}
                    </div>


                    <div className="col-lg-6 col-sm-6 col-md-6 auth-logo">
                        <img className="auth-logo-img" src="/assets/images/white-logo.png" alt="" />
                    </div>

                </div>
            </main>
        )
    }
}
