import React from 'react'
import BadgeSmall from './BadgeSmall'


class BadgesList extends React.Component {

	render(){
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
