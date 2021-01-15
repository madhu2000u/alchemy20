import styles from '../styles/ChangePass.module.css';
import {useEffect, useState} from 'react';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import {ApiService} from '../api_service';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useToasts} from 'react-toast-notifications';
import {useRouter} from 'next/router';

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

export default function ChangePass() {
	const router = useRouter();
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({
		password: 'Enter password',
		password_val: 'Atleast 8 characters, one letter and one number',
		password_confirmation: 'Passwords should match',
	});
	const [url_id, setUrlId] = useState('');
	const {addToast} = useToasts();

	var url_string, id;

	useEffect(() => {
		if (localStorage.getItem('refresh-token')) {
			router.push('/dashboard');
		}
		url_string = window.location.href;
		var url = new URL(url_string);
		id = url.searchParams.get('id');
		if (id != null) setUrlId(id);
		else router.push('/login');
	}, []);

	const validatePassword = (value) => {
		if (value !== '') {
			errors.password = null;
		} else {
			errors.password = ['Empty password is not allowed'];
		}

		if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
			errors.password_val = null;
		} else {
			errors.password_val = ['Atleast 8 characters, one letter and one number'];
		}
		setPassword(value);
	};

	const validatePasswordConfirmation = (value) => {
		if (value === '') {
			errors.password_confirmation = ['Password confirmation cannot be empty'];
		} else if (value !== password) {
			errors.password_confirmation = ["Passwords don't match"];
		} else {
			errors.password_confirmation = null;
		}
		setConfirmPassword(value);
	};

	const helperTextStyle = {
		helper: {
			fontSize: '.8em',
		},
	};

	const handleChangePass = async (e) => {
		if (errors.password === null && errors.password_val === null && errors.password_confirmation === null) {
			const headers = {
				id: url_id,
				new_pass: confirm_password,
			};
			try {
				let isResetSuccess = await ApiService.resetPassword(headers);
				if (isResetSuccess.status == 200) {
					addToast('Password reset success!', {appearance: 'success', autoDismiss: true});
					setTimeout(() => {
						router.push('/login');
					}, 2000);
				}
			} catch (error) {
				console.log(error);
				addToast(`Cannot register : ${error.response.data.message}`, {appearance: 'error', autoDismiss: true});
			}
		} else {
			addToast('Check pass', {appearance: 'error', autoDismiss: true});
		}
	};

	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<center>
				<div className={styles.container}>
					<p>Set new password</p>
					<h4>special characters not allowed</h4>
					<ThemeProvider theme={theme}>
						<TextField
							value={password}
							onChange={(e) => validatePassword(e.target.value)}
							margin="dense"
							label="Password"
							type="password"
							style={{margin: 15}}
							helperText={errors.password_val}
							variant="filled"
							error={errors?.password_val}
							InputHelperTextProps={{style: {fontSize: 4}}}
							FormHelperTextProps={{style: helperTextStyle.helper}}
							fullWidth
						/>
						<TextField
							value={confirm_password}
							onChange={(e) => validatePasswordConfirmation(e.target.value)}
							margin="dense"
							label="Confirm password"
							type="password"
							style={{margin: 15}}
							helperText={errors.password_confirmation}
							variant="filled"
							error={errors.password_confirmation}
							FormHelperTextProps={{style: helperTextStyle.helper}}
							fullWidth
						/>
						<Button
							variant="contained"
							color="primary"
							disabled={errors.password || errors.password_val || errors.password_confirmation}
							onClick={handleChangePass}>
							Reset Password
						</Button>
					</ThemeProvider>
				</div>
			</center>
		</main>
	);
}

ChangePass.Layout = Common;
