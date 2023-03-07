import styled from 'styled-components';

const StyledContainer = styled.div`
	background-color: ${({ color }) => color};
	display: flex;
	flex-direction: column;
	padding-left: 3rem;
	padding-right: 3rem;
	max-width: 330px;

	@media screen and (min-width: 1024px) {
		max-width: 330px;
		min-width: 300px;
	}
`;

export { StyledContainer };
