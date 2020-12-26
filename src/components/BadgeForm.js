import React from 'react'

import "bootstrap/dist/css/bootstrap.css";

class BadgeForm extends React.Component {

	state = {
		firstName:"",
		lastName:"",
		email:"",
		career:"",
	}

	handleChange = this.props.onChange

	handleClick = () => {
		console.log("CLG: button clicked")
		console.log(this.state)
	}

	render(){
		return (
			<div className={this.props.className}>
				<h1>New attendant</h1>
				<form>
					<div className="form-group">
						<label>First Name</label>
						<input 
							className="form-control"
							onChange={this.handleChange}
							name="firstName"
						/>
						<label>Last Name</label>
						<input 
							className="form-control"
							onChange={this.handleChange}
							name="lastName"
						/>
						<label>Email</label>
						<input 
							className="form-control"
							onChange={this.handleChange}
							name="email"
							type="email"
						/>
						<label>Career</label>
						<input 
							className="form-control"
							onChange={this.handleChange}
							name="career"
						/>
						<label>Twitter</label>
						<input 
							className="form-control"
							onChange={this.handleChange}
							name="twitter"
						/>
						<button
							type="button"
							onClick={this.handleClick}
							className="btn btn-primary"
						>
						Save
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default BadgeForm 
