import styled from 'styled-components';

export const StyledNotification = styled.div`
	float: right;
	top: 25%;
	position: relative;
	margin-right: 20px;

	.notification_img {
		height: auto;
		width: 25px;
		-webkit-animation: changeSize 0.5s infinite alternate;
		-moz-animation: changeSize 0.5s infinite alternate;
		-o-animation: changeSize 0.5s infinite alternate;
		animation: changeSize 0.5s infinite alternate;
		cursor: pointer;
	}

	@-webkit-keyframes changeSize {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.2);
		}
	}

	@-moz-keyframes changeSize {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.2);
		}
	}

	@-o-keyframes changeSize {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.2);
		}
	}

	@keyframes changeSize {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.2);
		}
	}
`;
