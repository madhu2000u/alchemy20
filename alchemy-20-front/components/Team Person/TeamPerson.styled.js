import styled from 'styled-components';
export const StyledPerson = styled.div`
	width: ${({head}) => (head ? '165px' : '135px')};

	display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
	display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
	display: -ms-flexbox; /* TWEENER - IE 10 */
	display: -webkit-flex; /* NEW - Chrome */
	display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */

	flex-direction: column;
	align-items: center;
	justify-content: center;

	.image {
		border-radius: 50%;
		background: transparent url(/spinner.gif) no-repeat scroll center center;
	}

	.name {
		font-size: 1.2em;
		font-weight: bold;
		color: #ecc82c;
		margin: 0;
		text-decoration: none;
	}
`;
