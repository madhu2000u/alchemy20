import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog(props) {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#2fb996',
			},
			secondary: {
				main: '#f69c2a',
			},
			text: {
				primary: '#ffffff',
				secondary: 'rbga(0, 0, 0, 0.85)',
			},
		},
	});

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Dialog
					open={props.open}
					TransitionComponent={Transition}
					keepMounted
					onClose={props.onClose}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description">
					<DialogTitle id="alert-dialog-slide-title">{props.heading}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<ReactMarkdown>{props.body}</ReactMarkdown>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={props.onClose} color="primary">
							Okay
						</Button>
					</DialogActions>
				</Dialog>
			</ThemeProvider>
		</div>
	);
}
