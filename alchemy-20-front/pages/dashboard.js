import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import style from '../styles/Dashboard.module.css';
import Footer from '../components/Footer/Footer';
import fetch from 'node-fetch';
import {ApiService} from '../api_service';
import {useToasts} from 'react-toast-notifications';
import 'font-awesome/css/font-awesome.min.css';
import DashboardEvents from '../components/DashboardEvents/DashboardEvents';
import { withStyles } from '@material-ui/core/styles';
import {Button, Dialog, IconButton, Typography, TextField, MenuItem} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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
	}
});


const years = [
	{
		value: 'First',
		label: 'First',
	},
	{
		value: 'Second',
		label: 'Second',
	},
	{
		value: 'Third',
		label: 'Third',
	},
	{
		value: 'Fourth',
		label: 'Fourth',
	},
	{
		value: 'Fifth',
		label: 'Fifth',
	}
];

const styles = () => ({
	root: {
	  margin: 0,
	  padding: "8%",
	  backgroundColor: "#303030",
	  color: theme.palette.text.primary,
	},
	closeButton: {
	  position: 'absolute',
	  right: "1%",
	  top: "1%"
	},
	'& .MuiTextField-root': {
		margin: theme.spacing(1),
		width: '25ch',
	},
  });
  
  const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
	  <MuiDialogTitle disableTypography className={classes.root} {...other}>
		<Typography variant="h6">{children}</Typography>
		{onClose ? (
		  <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
		  </IconButton>
		) : null}
	  </MuiDialogTitle>
	);
  });
  
  const DialogContent = withStyles(styles)(MuiDialogContent);
  
  const DialogActions = withStyles(styles)(MuiDialogActions);


export default function Dashboard({notifs, api_endpoint}) {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [college, setCollege] = useState('');
	const [dept, setDept] = useState('');
	const [year_of_study, setYear] = useState('');
	const [profile_pic, setProfile] = useState('');
	const [errors, setErrors] = useState({});
	const classes = styles();
	const {addToast} = useToasts();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
	setOpen(false);
  };

  const handleUpdate = () => {
	setOpen(false);
	const update = async (e) => {
		let data = {
			name: name,
			mobile: mobile,
			college: college,
			dept: dept,
			year_of_study: year_of_study,
			headers : {
				Authorization: 'Bearer '.concat(localStorage.getItem('auth-token')),
			}
		};
		try {
			let isUpdateSuccess = await ApiService.profileUpdate(data, process.env.endpoint);
			if (isUpdateSuccess.status === 200) {
				addToast('Updated successfully!', {appearance: 'success', autoDismiss: true});
				history.push('/login');
			}
		} catch (error) {
			addToast(`${error}`, {appearance: 'error', autoDismiss: true});
		}
	};
	update();

  }

  const validateName = (value) => {
		if (value !== '') {
			errors.name = null;
		} else {
			errors.name = ['Empty name is not allowed'];
		}
		setName(value);
	};

	const validateMobileNumber = (value) => {
		if (/^[0]?[789]\d{9}$/.test(value)) {
			errors.mobile_number = null;
		} else {
			errors.mobile_number = ['Enter a valid mobile number'];
		}
		setMobile(value);
	};

	const validateCollege = (value) => {
		if (value !== '') {
			errors.college = null;
		} else {
			errors.college = ['Empty College name is not allowed'];
		}
		setCollege(value);
	};

	const validateDept = (value) => {
		if (value !== '') {
			errors.dept = null;
		} else {
			errors.dept = ['Empty Department name is not allowed'];
		}
		setDept(value);
	};

	const validateYear = (value) => {
		if (value !== '') {
			errors.year = null;
		} else {
			errors.year = ['Empty Year is not allowed'];
		}
		setYear(value);
	};

	return (
		<div className={style.dashboard_container}>
			<div className={style.nav}>
				<Subpage notifs={notifs} showNot={true} />
			</div>
			<div className={style.profile_container}>
				<img src="https://i.imgur.com/HiNJNAv.png"></img>
				<p>Hello, {'Loren Ipsum'}</p>
				<div onClick={handleClickOpen} className={style.get_id_div}>Get ID</div>
			</div>
			<div className={style.events_workshops_container}>
				<div className={style.eve_wor_backdrop}>REGISTERED EVENTS</div>
				<div className={style.events_workshops_list}>{}</div>
			</div>

			<div className={style.events_workshops_container}>
				<div className={style.eve_wor_backdrop}>REGISTERED WORKSHOPS</div>
				<div className={style.events_workshops_list}>{}</div>
			</div>
			<Footer />
			<ThemeProvider theme={theme}>
				<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
					<DialogTitle id="customized-dialog-title" onClose={handleClose}>
						<center>Complete Profile</center> 
					</DialogTitle>
				<DialogContent dividers>
					<center>
						<TextField
							label="Name"
							style={{ margin: 7 }}
							value={name}
							error={!!errors?.name}
							helperText={errors?.name?.join(' ')}
							onChange={e => validateName(e.target.value)}
							variant="filled"
							className={classes.textField}
							margin="dense"
						/>
						<TextField
							label="Mobile Number"
							variant="filled"
							value={mobile}
							error={!!errors?.mobile_number}
							helperText={errors?.mobile_number?.join(' ')}
							onChange={e => validateMobileNumber(e.target.value)}
							style={{ margin: 7 }}
							className={classes.textField}
							margin="dense"
						/>
						<TextField
							label="College"
							style={{ margin: 7 }}
							value={college}
							error={!!errors?.college}
							helperText={errors?.college?.join(' ')}
							onChange={e => validateCollege(e.target.value)}
							className={classes.textField}
							variant="filled"
							margin="dense"
						/>
						<TextField
							label="Department"
							style={{ margin: 7 }}
							value={dept}
							error={!!errors?.dept}
							helperText={errors?.dept?.join(' ')}
							onChange={e => validateDept(e.target.value)}
							variant="filled"
							className={classes.textField}
							margin="dense"
						/>
						<TextField
							label="Year of study"
							value= {year_of_study}
							error={!!errors?.year}
							helperText={errors?.year?.join(' ')}
							style={{ margin: 7, width: "21ch" }}
							onChange={e => validateYear(e.target.value)}
							variant="filled"
							className={classes.textField}
							margin="dense"
							select
						>
							{years.map((option) => (
								<MenuItem key={option.value} value={option.value}>
								{option.label}
								</MenuItem>
							))}
						</TextField>
					</center>
					</DialogContent>
				<DialogActions>
				<Button autoFocus onClick={handleUpdate} disabled={
								errors.name ||
								errors.mobile_number ||
								errors.college ||
								errors.dept ||
								errors.year ||
								name === '' ||
								mobile === '' ||
								year_of_study === '' ||
								dept === '' ||
								college === ''
									? true
									: false
							} variant="contained" color="primary">
					Update
				</Button>
				</DialogActions>
			</Dialog>
	  </ThemeProvider>
		</div>
	);
}

Dashboard.Layout = Common;

export async function getServerSideProps() {
	const not_res = await fetch(process.env.endpoint + '/allNotific', {
		method: 'GET',
		headers: {
			get_api: process.env.get_api_key,
		},
	});

	const notifs = await not_res.json();
	const api_endpoint = process.env.endpoint;

	return {
		props: {
			notifs,
			api_endpoint,
		},
	};
}
