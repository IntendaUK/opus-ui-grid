//React
import React from 'react';

//Components
const CellBadge = ({ value, style }) => {
	return (
		<div className='badge' style={style}>
			{value}
		</div>
	);
};

export default CellBadge;
