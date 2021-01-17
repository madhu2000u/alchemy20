import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';

export default function EventPage(props) {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#ecc82c',
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

	function Image(props) {
		return <img {...props} style={{maxWidth: '100%'}} />;
	}
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Dialog
					open={props.open}
					onClose={props.onClose}
					scroll={'paper'}
					aria-labelledby="scroll-dialog-title"
					aria-describedby="scroll-dialog-description">
					<DialogTitle id="scroll-dialog-title">{props.event_name}</DialogTitle>
					<DialogContent dividers={true}>
						<DialogContentText id="scroll-dialog-description" tabIndex={-1}>
							<ReactMarkdown renderers={{image: Image}}>{props.event_details}</ReactMarkdown>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={props.onClose} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</ThemeProvider>
		</div>
	);
}
