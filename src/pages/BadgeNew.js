import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component {

	state = { 
		form: {
			firstName:"",
			lastName:"",
			email:"",
			twitter:"",
			career:"",
		} 
	}

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
				<div className="badge-new-content">
					<div className="badges-list">
						<Badge 
							firstName={this.state.form.firstName}
							lastName={this.state.form.lastName}
							email={this.state.form.email}									
							twitter={this.state.form.twitter}
							career={this.state.form.career}										
						/>                             
					</div>                             											
				<BadgeForm formValues={this.state.form} onChange={this.handleChange}             className="badge-form"/>
				</div>                                 											
			</div>
		)
	}
}

export default BadgeNew  
