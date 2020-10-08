import React, { Component } from 'react'
import { userService } from '../../../../core/commons/services/entity-services/user.service'
import { Redirect, Link } from "react-router-dom"

export default class RegisterPage extends Component {

	constructor() {
		super()
		this.state = {
			name: "",
			username: "",
			password: "",
			confirmPassword: "",
			error: null,
			isLoading: false,
			success: null,
			redirect: false
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

	// TODO : Validate Fields :  Consider using YUM

	handleRegister = async () => {
		this.setLoading(true)
		this.updateError(null)

		const { name, username, password, confirmPassword } = this.state
		let error = ""
		// this.setState({error})
		if (password.length <= 3) {
			error = "Password is not strong"
			this.updateError(error)
			this.setLoading(false)
			return
		}

		if (password != confirmPassword) {
			error = "Password does not match"
			this.updateError(error)
			this.setLoading(false)
			return
		}

		const registrationRequest = await userService.register({ name, username, password })
		if (!registrationRequest.success) {
			error = registrationRequest.msg
			this.updateError(error)
			this.setLoading(false)
			return
		}


		const success = "Registration Complete! Lets login"
		// this.setLoading(false)
		setTimeout(() => {
			this.setState({ success, isLoading: false })
		}, 500)

		setTimeout(() => {
			this.setState({ redirect: true })
		}, 2000)

	}

	render() {

		const { name, username, password, confirmPassword, error, isLoading, success, redirect } = this.state
		return (
			(redirect) ? (<Redirect to="/login" />) : (<main class="container-fluid w-100" role="main">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-md-6 d-flex flex-column justify-content-center align-items-center bg-white mnh-100vh">
						<div class="u-login-form">
							<form class="mb-3" action="/">
								<div class="mb-3">
									<h1 class="h2">Create Your account!</h1>
								</div>

								{/* <div class="form-group mb-4">
									<label for="name">Your name</label>
									<input id="name" class="form-control" value={name} name="name" onChange={this.handleValueChange} type="text" placeholder="John Doe" />
								</div> */}

								<div class="form-group mb-4">
									<label for="username">Your username</label>
									<input id="username" class="form-control" onChange={this.handleValueChange} name="username" type="username" value={username} placeholder="johndoe" />
								</div>

								<div class="form-row">
									<div class="col-md-6">
										<div class="form-group mb-4">
											<label for="password">Password</label>
											<input id="password" value={password} class="form-control" onChange={this.handleValueChange} name="password" type="password" placeholder="Enter your password" />
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group mb-4">
											<label for="confirmPassword">Confirm password</label>
											<input id="confirmPassword" value={confirmPassword} class="form-control" onChange={this.handleValueChange} name="confirmPassword" type="password" placeholder="Re-enter your password" />
										</div>
									</div>
								</div>

								{/* <div class="custom-control custom-checkbox mb-4">
									<input id="rememberMe" class="custom-control-input" name="rememberMe" type="checkbox"/>
									<label class="d-block custom-control-label" for="rememberMe">I agree with <a href="#">terms &amp; conditions</a></label>
								</div> */}

								{(error) ? <p className="text-danger">{error}</p> : ""}

								{(success) ? <p className="text-success">{success}</p> : ""}

								<button disabled={isLoading} class="btn btn-primary btn-block" type="button" onClick={this.handleRegister}>
									{isLoading ? (<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>) : ""}
									Sign Up</button>
							</form>

							<p class="small">
								Already have an account? <Link to="/login">Login here</Link>
							</p>
						</div>
					</div>

					<div className="col-lg-6 col-sm-6 col-md-6 auth-logo">
						<img className="auth-logo-img" src="/assets/images/white-logo.png" alt="" />
					</div>
				</div>
			</main>)

		);
	}
}
