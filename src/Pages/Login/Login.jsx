import React from 'react'
import Nav from '../../Components/navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import './login.css'

export default function Login() {

	return (
		<div className='parent'>
			<Nav />
			<div className="login_container">
				<section className="form_container">
					<section className="main">
						<section className="main_head">
							<h1>Join us today</h1>
							<button className="btn google_btn">
								<p>Sign up with Google</p>
							</button>
						</section>
						<form className='Form' action="submit">
							<label>
								<h3>User Name</h3>
								<input type="name"
									placeholder="i.e Enter your name"
									required
								/>
							</label>
							<label>
								<h3>Password</h3>
								<input type="password"
									required
								/>
							</label>
							<label>
								<input type="checkbox" className="rem" /><h3 className="me">Remember me</h3>
							</label>
							<button className="btn account_btn" type='submit'  >
								<p>Create Account</p>
							</button>
						</form>
						<section className="main_foot">
							<h3>Already have an account <a href="/home">Sign in</a></h3>
						</section>
					</section>
				</section>
				</div>
			{/* <Footer /> */}
		</div>
	)
}
