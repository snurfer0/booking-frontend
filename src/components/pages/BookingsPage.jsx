import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookingList from '../../components/items/BookingList';
import { deleteBooking, fetchBookings } from '../../store/actions/index';
import Pagination from '../items/Pagination';

const BookingsPage = ({ bookings, pagination,  fetchBookings, deleteBooking }) => {


    console.log(bookings);
	useEffect(() => {
		fetchBookings(pagination.currentPage);
	}, [pagination.currentPage]);

	return (
		<section className='container'>
			<h1>all bookings</h1>
			<BookingList
				bookings={bookings}
				onDeleteBooking={(id) => deleteBooking(id)}
			/>
			<Pagination {...pagination}/>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
        bookings: state.bookings,
        pagination: state.pagination
	};
};

export default connect(mapStateToProps, { fetchBookings, deleteBooking })(
	BookingsPage,
);
