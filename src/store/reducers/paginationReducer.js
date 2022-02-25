import { PREVIOUS_PAGE, NEXT_PAGE } from '../../utils/constants';

const initialState = {
	pages: null,
	currentPage: 1,
};

const paginationReducer = (pagesState = initialState, action) => {
	switch (action.type) {
        case NEXT_PAGE:
            if (pagesState.currentPage === pagesState.pages) {
				return pagesState;
			}
			return {
				...pagesState,
				currentPage: pagesState.currentPage + 1,
			};
        case PREVIOUS_PAGE:
            if (pagesState.currentPage === 1) {
                return pagesState;
            }
			return {
				...pagesState,
				currentPage: pagesState.currentPage - 1,
			};

		default:
			return pagesState;
	}
};

export default paginationReducer;
