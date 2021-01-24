import styled from 'styled-components';

export const StyledEventItem = styled.div`
	background-color: #303030;
	padding: 10px;
	margin: 0 40px 40px 40px;
	border: ${({is_active}) => (is_active ? '#ecc82c solid' : '#807c7c solid')};
	width: 400px;
	overflow-wrap: break-word;

	.event_item_container_p {
		color: white;
		margin: 0;
		margin: 8px 0 0 0;
	}

	.event_item_container_a {
		color: #ecc82c;
		font-weight: bold;
	}

	.event_item_container_h2 {
		color: white;
		margin: 12px 0 0 0;
	}

	.event_item_container_h3 {
		color: white;
		margin: 12px 0 0 0;
	}

	.event_item_container_img {
		width: 100%;
		filter: ${({is_active}) => (is_active ? 'grayscale(0)' : 'grayscale(100%)')};
	}

	.reg_button {
		width: 100px;
		height: 30px;
		background-color: #ecc82c;
		border: #ecc82c solid 1px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		margin: 10px 0 0 0;
		align-self: center;

		-webkit-transition: all 0.15s ease-in-out;
		-moz-transition: all 0.15s ease-in-out;
		-o-transition: all 0.15s ease-in-out;
		transition: all 0.15s ease-in-out;
	}

	.btn_container {
		display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
		display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
		display: -ms-flexbox; /* TWEENER - IE 10 */
		display: -webkit-flex; /* NEW - Chrome */
		display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */

		flex-direction: row;
		justify-content: space-evenly;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	.reg_button:hover {
		background-color: #303030;
		border: #ecc82c solid 1px;
		color: white;
		cursor: pointer;
	}

	.event_item_container_h4 {
		margin: 0;
		color: #ecc82c;
	}

	@media (max-width: 450px) {
		width: 300px;
	}

	@media (max-width: 340px) {
		width: 280px;
	}
`;
