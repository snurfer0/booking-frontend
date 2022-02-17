import _ from 'lodash';
import React from 'react';
import Booking from './Booking';

const BookingList = ({ bookings, onDeleteBooking }) => {
	return _.chunk(bookings, 2).map((chunk, index) => {
		return (
			<div key={index} className='row'>
				{chunk.map((booking, index) => (
					<Booking
						key={index}
						onDeleteBooking={onDeleteBooking}
						{...booking}
					/>
				))}
			</div>
		);
	});
};

export default BookingList;
