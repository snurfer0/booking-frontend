export const range = (start, end, max) => {
	// if (end > max) end = max;
	// if (start < 5) start = 1;
	// if (end === max) start = max - 5;
	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
};
