import React, { Component } from 'react'
import './NameTag.css'

class NameTag extends Component {
	render() {
		return (
			<div
				className="name-tag"
				style={{
					top: this.props.yPos - 80,
					left: this.props.xPos + 15
				}}
			>
				{this.props.showing ? <div>{this.props.provinceName}</div> : null}
			</div>
		)
	}
}

export default NameTag
