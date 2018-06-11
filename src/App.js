import React, { Component } from 'react'
import TurkeySVGMap from './TurkeySVGMap'
import NameTag from './NameTag'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hoveringOverMap: false,
			hoveringOverProvince: null,
			mouseX: null,
			mouseY: null
		}

		this.hoverListener = this.hoverListener.bind(this)
		this.getCoordinates = this.getCoordinates.bind(this)
	}

	hoverListener(mapHoverState) {
		this.setState({
			hoveringOverMap: mapHoverState.status,
			hoveringOverProvince: mapHoverState.iladi
		})
		if (mapHoverState.status === false) {
			this.setState({
				hoveringOverProvince: null
			})
		}
	}

	getCoordinates(e) {
		this.setState({ mouseX: e.screenX, mouseY: e.screenY })
	}

	render() {
		return (
			<div className="App">
				<NameTag
					showing={this.state.hoveringOverMap}
					provinceName={this.state.hoveringOverProvince}
					xPos={this.state.mouseX}
					yPos={this.state.mouseY}
				/>
				<div className="svg-turkiye-haritasi" onMouseMove={this.getCoordinates}>
					<TurkeySVGMap
						hoverListener={mapHoverState => this.hoverListener(mapHoverState)}
					/>
				</div>
			</div>
		)
	}
}

export default App
