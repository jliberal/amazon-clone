import React from 'react';
import '../styles/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../db/firebase';

function Login() {
	const history = useHistory();
	const [email, setMail] = useState('');
	const [password, setPassword] = useState('');
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((err) => alert(err.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setMail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login__signInButton" onClick={signIn}>
						SignIn
					</button>
				</form>
				<p>
					By signin in you agree to the AMAZON CLONE Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Add Notice.
				</p>
				<button className="login__registerButton" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
