import React from 'react';
import { Form } from './styled/form';

export function Input(props) {
	return (
		<div>
			{props.title}
			<Form type="text" />
		</div>
	);
}
