import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component {

	state = { form: {} }

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	render(){
		return (
			<div className="badge-new">
				<Navbar/>
				<div className="badge-new-content">
					<div className="badges-list">
						<Badge 
							firstName={this.state.form.firstName}
							lastName={this.state.form.lastName}
							career={this.state.form.career}
							twitter={this.state.form.twitter}
						/>
					</div>
				<BadgeForm onChange={this.handleChange} className="badge-form"/>
				</div>
			</div>
		)
	}
}

export default BadgeNew  
