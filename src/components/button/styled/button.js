import styled from 'styled-components';

export const SButton = styled.div`
	height: 50px;
	width: 50px;
	font-size: 25px;
	line-height: 0;
	border-radius: 50%;
	position: relative;
	background-color: #0083ff;
	margin: 10px;

	&:hover {
		background-color: #0055ff;
		cursor: click;
	}
`;
export const PlusHorizontal = styled.div`
	position: absolute;
	width: 2px;
	height: 40%;
	margin: 50% auto auto 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
`;

export const PlusVertical = styled(PlusHorizontal)`
	width: 40%;
	height: 2px;
`;
