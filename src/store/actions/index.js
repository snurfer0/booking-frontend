import axios from 'axios';
import * as constants from '../../utils/constants';

const api = axios.create({ baseURL: 'http://localhost:8001/api' });

export const fetchBookings = () => async (dispatch) => {
	const response = await api
		.get(`/bookings`)
		.catch((error) => console.log(error));

	if (response && response.status === 200) {
		dispatch({ type: constants.FETCH_BOOKINGS, payload: response.data });
	}
};
