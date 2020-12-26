import React from 'react'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'

import api from '../api'

import './styles/Badges.css'

class Badges extends React.Component {


	constructor(props){
		super(props)
		this.state = {
			data: undefined,
			loading: true,
			error: null,
		}
	}

	fetchData = async () =>{
		this.setState({ loading:true, error: null})
		try{
			const data = await api.badges.list()
			this.setState({ loading: false, data: data })
		} catch (error){
			this.setState({ loading:true, error: error})
		}

	}

	componentDidMount(){
		this.fetchData()
	}


	render(){
		if(this.state.loading){
			return 'Loading...'
		}
		return (
		<div>
			<div className="badges-content">
				{this.state.loading && (
					<p>Cargando...</p>
				)}
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
