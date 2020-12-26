import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'

import './styles/BadgeNew.css'

class BadgeNew extends React.Component {

	render(){
		return (
			<div className="badge-new">
				<Navbar/>
				<div className="badge-new-content">
					<div className="badges-list">
						<Badge 
							firstName="Jorge"
							lastName="Isaza"
							twitter="@JorgeIsz"
							career="Software Engineer"
						/>
					</div>
				<BadgeForm className="badge-form"/>
				</div>
			</div>
		)
	}
}

export default BadgeNew  
