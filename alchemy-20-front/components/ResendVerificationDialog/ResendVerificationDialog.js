import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import styles from './ResendVerificationDialog.module.css';
import {ApiService} from '../../api_service';
import {useToasts} from 'react-toast-notifications';

export default function ResendVerificationDialog(props) {
	const [open, setOpen] = React.useState(false);
	const [errors, setError] = useState('Please enter your mail ID');
	const [email, setEmail] = useState('');
	const {addToast} = useToasts();

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

	const validateEmail = (value) => {
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				value
			)
		) {
			setError('');
		} else {
			if (value != '') setError('Enter a valid email');
			else setError('Please enter your email ID');
		}
		setEmail(value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSendMail = async (purpose) => {
		const headers = {
			email: email.toLowerCase(),
		};
		try {
			handleClose();
			let isSendMailSuccess;
			if (purpose === 'activation') isSendMailSuccess = await ApiService.verificationMailResend(headers);
			else isSendMailSuccess = await ApiService.forgotPassword(headers);
			if (isSendMailSuccess.status === 200) {
				addToast(`Mail sent to ${email}`, {appearance: 'success', autoDismiss: true});
			} else {
				addToast(`Error: ${JSON.stringify(isSendMailSuccess).message}`, {
					appearance: 'error',
					autoDismiss: true,
				});
			}
		} catch (e) {
			addToast(`${e.response.data.message}`, {appearance: 'error', autoDismiss: true});
		}
	};

	return (
		<div className={styles.container}>
			<ThemeProvider theme={theme}>
				<a className={styles.resend_link} onClick={handleClickOpen}>
					{props.dp_link}
				</a>

				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">{props.message}</DialogTitle>
					<DialogContent>
						<DialogContentText>{props.longMessage}</DialogContentText>
						<TextField
							value={email}
							autoFocus
							error={!!errors}
							onChange={(e) => validateEmail(e.target.value)}
							margin="dense"
							label="Email Address"
							type="email"
							fullWidth
							style={{margin: 7}}
							helperText={errors}
							variant="filled"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="500">
							Cancel
						</Button>
						<Button onClick={() => handleSendMail(props.purpose)} color="primary" disabled={errors}>
							Send
						</Button>
					</DialogActions>
				</Dialog>
			</ThemeProvider>
		</div>
	);
}
