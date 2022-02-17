import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import BookingList from './components/BookingList';
import { fetchBookings } from './store/actions/index';
import { DELETE_BOOKING } from './utils/constants';

const App = ({ bookings, fetchBookings }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchBookings();
	}, []);

	return (
		<section className='container'>
			<h1>upcoming bookings</h1>
			<BookingList
				bookings={bookings}
				onDeleteBooking={(id) =>
					dispatch({ type: DELETE_BOOKING, payload: id })
				}
			/>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		bookings: state.bookings,
	};
};

export default connect(mapStateToProps, { fetchBookings })(App);
