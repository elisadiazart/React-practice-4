import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 0.6875rem;
	padding-left: 1.875rem;
	padding-right: 1.875rem;
	border: none;
	border-radius: 1.5625rem;
	font-family: 'Lexend Deca', sans-serif;
	color: ${({ color }) => color};
	margin-top: auto;
	margin-bottom: 3rem;

	&:hover {
		background-color: ${({ color }) => color};
		color: white;
		outline: 1px solid white;
	}
`;

export { StyledButton };
