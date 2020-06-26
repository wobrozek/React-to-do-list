import React from 'react';
import { Pagebox } from './styled/pagebox';

export function Box(props) {
	return (
		<Pagebox variant={props.variant}>
			<i>{props.title}</i>
		</Pagebox>
	);
}
