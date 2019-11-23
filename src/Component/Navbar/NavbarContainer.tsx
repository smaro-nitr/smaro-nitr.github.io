import React from 'react';
import { Link } from "react-router-dom";
import { navbar } from '../../Route/RouteConfig';

interface Props {
	title?: String
}

interface State {
}

export default class NavbarContainer extends React.Component<Props, State> {
	render() {
		return (
			<ul>
				{navbar.map((route, index) => {
					return (
						<li key={index} style={{ background: route.title === this.props.title ? 'red' : 'yellow' }}>
							<Link to={route.path}>{route.title}</Link>
						</li>
					);
				})}
			</ul>
		);
	}
}