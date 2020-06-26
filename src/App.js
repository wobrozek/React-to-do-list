import React, { Component } from 'react';
import './App.css';
import { Box } from './components/lista/box';

class App extends Component {
	render() {
		return (
			<div>
				<div className="wraper">
					<Box title="normal box" />
					<Box title="important box" variant="important" />
				</div>
			</div>
		);
	}
}

export default App;
