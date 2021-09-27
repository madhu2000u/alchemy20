import styled from 'styled-components';

export const StyledDropdownMenu = styled.div`
	position: absolute;
	top: 35px;
	width: 300px;
	height: 400px;
	transform: ${({isOpen}) => (isOpen ? 'translateX(-90%)' : 'translateX(100%)')};
	background-color: #2a2c2d;
	border: 4px solid#2fb996;
	padding: 1rem;
	overflow: auto;
	transition: transform 0.3s ease-in-out;

	.notification_head {
		color: white;
		margin: 0;
		font-weight: bold;
		font-size: 1.2em;
	}

	.notification_desc {
		color: white;
		margin: 8px 0 0 0;
		font-size: 0.9em;
	}

	.notification_date {
		color: gray;
		margin: 5px 0 0 0;
		font-size: 0.8em;
	}

	.notif_divider {
		height: 1px;
		background-color: gray;
		border: none;
	}
`;
