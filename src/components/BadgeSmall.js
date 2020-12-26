import React from 'react'

import './styles/BadgeSmall.css'

class BadgeSmall extends React.Component {

	render(){
		return (
		<div className="badge-small">
			<h3>{this.props.data.firstName} {this.props.data.lastName}</h3>
			<p>{this.props.data.career}</p>
			<p>@{this.props.data.twitter}</p>
		</div>
		)
	}
}

export default BadgeSmall 
