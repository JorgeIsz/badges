import React from 'react'
import BadgesList from '../components/BadgesList'

import Navbar from '../components/Navbar'

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
			<Navbar />
			<div className="badges-content">
				<h3>Speakers</h3>
				<div className="list-container">
					<BadgesList badges={this.state.data}/>
				</div>
			</div>
		</div>
		)
	}
}

export default Badges 
