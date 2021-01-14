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

export default function ResendVerificationDialog() {
	const [open, setOpen] = React.useState(false);
	const [errors, setError] = useState('Please enter your mail ID');
	const [email, setEmail] = useState('');
	const {addToast} = useToasts();

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

	const handleResendMail = async (e) => {
		const headers = {
			email: email,
		};
		try {
			handleClose();
			let isResendMailSuccess = await ApiService.verificationMailResend(headers);
			if (isResendMailSuccess.status === 200) {
				addToast(`Mail sent to ${email}`, {appearance: 'success', autoDismiss: true});
			} else {
				addToast(`Error: ${JSON.stringify(isResendMailSuccess).message}`, {
					appearance: 'error',
					autoDismiss: true,
				});
			}
		} catch (e) {
			addToast(`${e}`, {appearance: 'error', autoDismiss: true});
		}
	};

	return (
		<div className={styles.container}>
			<ThemeProvider theme={theme}>
				<a className={styles.resend_link} onClick={handleClickOpen}>
					Resend Verification mail?
				</a>

				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Resend verification mail</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure you checked your inboxes and spam? Enter your email address again to get a new
							mail. Comeback here after clicking the verification link!
						</DialogContentText>
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
						<Button onClick={handleResendMail} color="primary" disabled={errors}>
							Resend
						</Button>
					</DialogActions>
				</Dialog>
			</ThemeProvider>
		</div>
	);
}
