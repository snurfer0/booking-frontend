import React from 'react';
import { useDispatch } from 'react-redux';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../utils/constants';

const PageNumbers = ({ pages, currentPage }) => {
	let dispatch = useDispatch();
	return (
		<div className='page-numbers-container'>
			<button
				onClick={() => dispatch({ type: PREVIOUS_PAGE })}
				className='page-button'
			>
				{'<<'}
			</button>
			<div className='current-page-item'>{currentPage}</div>
			<button
				onClick={() => dispatch({ type: NEXT_PAGE })}
				className='page-button'
			>
				{'>>'}
			</button>
		</div>
	);
};

const Pagination = (props) => {
	return <PageNumbers {...props} />;
};

export default Pagination;
