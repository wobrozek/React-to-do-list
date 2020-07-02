import React, { Component } from 'react';
import './App.css';
import { Box } from './components/lista/box';
import { Button } from './components/button/button';
import { Input } from './components/form/form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			CurrentItems: {
				text: '',
				key: ''
			}
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		console.log('siemano');
	}
	render() {
		return (
			<div>
				<div className="wraper">
					<div id="list">
						<Box title="normal box" />
						<Box title="important box" variant="important" />
					</div>
					<div className="center">
						<Input title="co chcesz zrobić? " />
						<Button onClick={this.onClick} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
