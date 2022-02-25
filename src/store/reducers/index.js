import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import paginationReducer from './paginationReducer';

const reducers = combineReducers({
	bookings: bookingsReducer,
	pagination: paginationReducer,
});

export default reducers;
