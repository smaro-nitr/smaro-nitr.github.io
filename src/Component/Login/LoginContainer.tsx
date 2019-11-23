import React from 'react';
import {
	Redirect
} from "react-router-dom";

export default class LoginContainer extends React.Component {
	render() {
		const isUserLoggedIn = false;
		return (
			isUserLoggedIn ?
				<React.Fragment>
					<h2>LoginComponent</h2>
				</React.Fragment>
				:
				<Redirect to="/menu1" />
		)
	}
}