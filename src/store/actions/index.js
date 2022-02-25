import axios from 'axios';
import * as constants from '../../utils/constants';

const api = axios.create({ baseURL: 'http://localhost:8000/api' });

export const fetchBookings = (page) => async (dispatch) => {
	console.log('object');
	const response = await api
		.get(`/bookings/${page}`)
		.catch((error) => console.error(error));

	if (response && response.status === 200) {
		dispatch({ type: constants.FETCH_BOOKINGS, payload: response.data.bookings });
		dispatch({
			type: constants.SET_TOTAL_PAGES,
			payload: response.data.pages,
		});
	}
};

export const deleteBooking = (id) => async (dispatch) => {
	const response = await api
		.delete(`/bookings/delete/${id}`)
		.catch((error) => console.error(error));

	if (response && response.status === 202) {
		dispatch({ type: constants.DELETE_BOOKING, payload: id });
	}
};
