import {useEffect, useState} from 'react';
import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
import Router from 'next/router';
import Loading from '../components/Loading/Loading';
import {ToastProvider} from 'react-toast-notifications';

export default function MyApp({Component, pageProps}) {
	useEffect(() => {
		document.documentElement.lang = 'en';
	}, []);

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
