import styled from 'styled-components';
export const StyledPerson = styled.div`
	width: ${({head}) => (head ? '165px' : '135px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.image {
		border-radius: 50%;
		height: ${({head}) => (head ? '145px' : '120px')};
		width: ${({head}) => (head ? '145px' : '120px')};
	}

	.name {
		font-size: 1.2em;
		font-weight: bold;
		color: #ecc82c;
		margin: 0;
		text-decoration: none;
	}

	@media (max-width: 600px) {
		.image {
			height: ${({head}) => (head ? '100px' : '85px')};
			width: ${({head}) => (head ? '100px' : '85px')};
		}
	}
`;
