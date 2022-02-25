import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import {
	formatDate,
	formatUserEmailList,
	getDate,
	getMonthShort,
	getTime,
} from '../../utils/formatters';

const Booking = ({
	id,
	address,
	createdAt,
	event,
	user,
	totalPrice,
	onDeleteBooking,
}) => {
	return (
		<article className='card fl-left'>
			<section className='date'>
				<time>
					<span>{getDate(event.startTime)}</span>
					<span>{getMonthShort(event.startTime)}</span>
				</time>
			</section>
			<section className='card-cont'>
				<div className='card-title'>
					<h3>
						#{id} {event.title}, {address.venueName}
					</h3>
					<h3>{totalPrice}$</h3>
				</div>
				<p className='description'>{event.description}</p>
				<p className='host'>HOST: {user.email}</p>

				<div className='even-date'>
					<i className='fa fa-calendar'></i>
					<time className='time-container'>
						<span>
							<h2>{formatDate(event.startTime)}</h2>
						</span>
						<span>
							<h2>
								{getTime(event.startTime)} -{' '}
								{getTime(event.endTime)}
							</h2>
						</span>
					</time>
				</div>
				<p>
					<a href='#' data-tooltip={formatUserEmailList(event.users)}>
						See who's comming
					</a>
				</p>
				<div className='even-info'>
					<FontAwesomeIcon
						className='locationDotIcon'
						icon={faLocationDot}
					/>
					{address.address}&nbsp; {address.zip}&nbsp; {address.city}
					{'-'}
					{address.state}, {address.country}
				</div>

				<button
					className=' grow_on_hover'
					href='#'
					onClick={() => onDeleteBooking(id)}
				>
					Delete
				</button>
			</section>
		</article>
	);
};

export default Booking;
