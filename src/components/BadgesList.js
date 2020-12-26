import React from 'react'
import {Link} from 'react-router-dom'
import BadgeSmall from './BadgeSmall'


class BadgesList extends React.Component {

	render(){
		if(!this.props.badges.length){
			return (
				<div>
					<h5>There's badges yet</h5>
				</div>
			)
		}
		return (
		<div>
			{this.props.badges.map(badge => {
				return (
					<BadgeSmall key={badge.id} data={badge} />
				)
			})}
		</div>
		)
	}
}

export default BadgesList 
