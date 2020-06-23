import React, { Component } from 'react';
import './App.css';
import { Lista } from './components/lista/lista';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Lista title="Zalety komponentów" arg1="przejrzystosc" arg2="wygoda" arg3="łatwość w zarządzaniu" />
			</div>
		);
	}
}

export default App;
