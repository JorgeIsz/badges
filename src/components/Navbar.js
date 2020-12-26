import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Navbar.css'

class Navbar extends React.Component {

	render(){
		return (
		<div className="navbar">
			<Link to="/">
			<span>Some</span>
			<span><b>Conf</b></span> 
			</Link>
		</div>
		)
	}
}

export default Navbar 
