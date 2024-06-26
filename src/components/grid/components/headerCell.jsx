//React
import React, { useContext } from 'react';

//System
import { createContext } from '@intenda/opus-ui';

const GridContext = createContext('grid');

const HeaderCell = ({ caption }) => {
	const { state: { hasHeader } } = useContext(GridContext);

	if (!hasHeader)
		return null;

	const headerCell = (
		<div
			className='headerCell'
		>
			{caption}
		</div>
	);

	return headerCell;
};

export default HeaderCell;
