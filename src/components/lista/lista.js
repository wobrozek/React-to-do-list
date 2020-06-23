import React from 'react';
import './lista.css';
export function Lista(props) {
	return (
		<div>
			<h1> {props.title} </h1>{' '}
			<ol>
				<li> {props.arg1} </li> <li> {props.arg2} </li> <li> {props.arg3} </li>{' '}
			</ol>{' '}
		</div>
	);
}
