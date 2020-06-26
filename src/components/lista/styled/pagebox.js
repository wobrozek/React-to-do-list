import styled from 'styled-components';

export const Pagebox = styled.div`
	width: 100%;
	min-height: 10px;
	background-color: ${(props) => (props.variant === 'important' ? '#a83232' : '#888')};
	color: ${(props) => (props.variant === 'important' ? '#fff' : '#000')};
	padding-left: 30px;
`;
