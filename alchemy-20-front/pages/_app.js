import {useEffect, useState} from 'react';
import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
import Router from 'next/router';
import Loading from '../components/Loading/Loading';
import {ToastProvider} from 'react-toast-notifications';
import {ApiService} from '../api_service';

export default function MyApp({Component, pageProps}) {
	useEffect(() => {
		document.documentElement.lang = 'en';
	}, []);

	useEffect(() => {
		console.log('From app js - ' + process.env.endpoint);
		const refreshtoken = localStorage.getItem('refresh-token');
		if (refreshtoken != null) {
			var currentDate = new Date();
			var expDate = new Date(localStorage.getItem('expirationdate'));

			if (currentDate > expDate) {
				const Refresh = async () => {
					try {
						const headers = {
							refreshtoken: refreshtoken,
						};
						let Refreshresult = await ApiService.refreshToken(headers);
						if ((Refreshresult.status = 200 && Refreshresult.data.success)) {
							var tokenexpiration = new Date();
							tokenexpiration.setSeconds(new Date().getSeconds() + parseInt(300));
							localStorage.setItem('auth-token', Refreshresult.data.accessToken);
							localStorage.setItem('expirationdate', tokenexpiration);
						}
					} catch (error) {
						console.log(error);
					}
				};
				Refresh();
			}
		}
	});

	const [loading, setLoad] = useState(false);
	Router.events.on('routeChangeStart', () => setLoad(true));
	Router.events.on('routeChangeComplete', () => setLoad(false));
	Router.events.on('routeChangeError', () => setLoad(false));

	const Layout = Component.Layout ? Component.Layout : React.Fragment;
	return loading ? (
		<Loading />
	) : (
		<Layout>
			<ToastProvider autoDismiss autoDismissTimeout={6000} placement="bottom-right">
				<Component {...pageProps} />
			</ToastProvider>
		</Layout>
	);
}
