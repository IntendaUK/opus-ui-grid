const getFilteredDataColumns = ({ state: { wgts } }) => {
	let result = wgts
		.filter(({ dataBound = true, prps = {} }) => {
			if (dataBound !== true)
				return false;

			return prps.vis !== false;
		});

	return result;
};

export const getOrderedColIds = props => {
	const cols = getFilteredDataColumns(props);

	const result = cols.map(c => c.id);

	return result;
};

