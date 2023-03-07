import styled from 'styled-components';

const StyledIconContainer = styled.div`
	width: 50px;
	margin-top: 3rem;
	margin-bottom: 2.2rem;
	position: relative;
	padding-left: 25px;

	&::after {
		content: '';
		width: 50px;
		height: 50px;
		background-color: black;
		border-radius: 50%;
		position: absolute;
		transform: translate(0%, -50%);
		top: 50%;
		left: 0;
		opacity: 0.25;
		z-index: 0;
	}
`;

export { StyledIconContainer };
