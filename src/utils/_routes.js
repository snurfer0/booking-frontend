import BookingsPage from '../components/pages/BookingsPage';
import HomePage from '../components/pages/HomePage';

export const _routes = [
	{
		component: HomePage,
		path: '/',
		exact: true,
	},
	{
		component: BookingsPage,
		path: '/bookings',
		exact: true,
	},
];
