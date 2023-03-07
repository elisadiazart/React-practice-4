import styled from 'styled-components';

const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 500px;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		min-height: 400px;
	}
`;

export { StyledCards };
