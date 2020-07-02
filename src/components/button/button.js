import React, { Component } from 'react';
import { SButton, PlusHorizontal, PlusVertical } from './styled/button';

export class Button extends Component {
	render() {
		return (
			<SButton onClick={this.props.onClick}>
				<PlusHorizontal />
				<PlusVertical />
			</SButton>
		);
	}
}
