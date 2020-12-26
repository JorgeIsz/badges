import React from 'react'

import prgLogo from '../images/prg.svg'
import "./styles/Badge.css"
import "bootstrap/dist/css/bootstrap.css";

class Badge extends React.Component {

	render(){
		return (
			<div className="card">
				<img className="card-img-top" src={prgLogo} alt="Programador" />
				<div className="card-body">
			 		<h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
			 		<p className="card-text">{this.props.career}</p>
			 		<p>@{this.props.twitter}</p>
				</div>
			</div>
		)
	}
}

export default Badge
