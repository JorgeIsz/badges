import React from 'react'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'


import './styles/Badges.css'

class Badges extends React.Component {

	state = {
		data:[
			{id:"1",firstName:"Jorge",lastName:"Isaza",twitter:"JorgeIsz",career:"Programmer"},
			{id:"2",firstName:"Luis",lastName:"Barrera",twitter:"ads",career:"Engineer"},
			{id:"3",firstName:"Antonio",lastName:"Fernandez",twitter:"ddwwe",career:"Soccer player"},
			{id:"4",firstName:"Miguel",lastName:"Garcia",twitter:"mgarcia",career:"Designer"},
		]
	}

	render(){
		return (
		<div>
			<div className="badges-content">
				<div className="row">
					<h3>Speakers</h3>
					<div> 
						<Link className="btn btn-primary ml-2" to="/badges/new">Add</Link>
					</div>
				</div>
				<div className="list-container">
					<BadgesList badges={this.state.data}/>
				</div>
			</div>
		</div>
		)
	}
}

export default Badges 
