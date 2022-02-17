import { DELETE_BOOKING, FETCH_BOOKINGS } from '../../utils/constants';

const initialState = {
	bookings: [],
};

const bookingsReducer = (bookings = initialState.bookings, action) => {
	switch (action.type) {
		case FETCH_BOOKINGS:
			return action.payload;
		case DELETE_BOOKING:
			return bookings.filter((booking) => booking.id !== action.payload);

		default:
			return bookings;
	}
};

export default bookingsReducer;
