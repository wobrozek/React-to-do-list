import styled from 'styled-components';

export const Form = styled.input`
	border: 1px solid #0083ff;
	text-align: center;
	margin-left: 10px;

	&:focus {
		outline: 1px solid #0083ff;
		-webkit-box-shadow: 0px 0px 101px 1px rgba(0, 131, 255, 1);
		-moz-box-shadow: 0px 0px 101px 1px rgba(0, 131, 255, 1);
		box-shadow: 0px 0px 101px 1px rgba(0, 131, 255, 1);
	}
`;
