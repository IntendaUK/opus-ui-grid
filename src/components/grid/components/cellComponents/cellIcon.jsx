//React
import React from 'react';

//Components
const CellIcon = ({ value, style }) => {
	const iconClass = 'icon';

	return (
		<div className={iconClass} style={style}>
			<div className='material-icons icon'>
				{value}
			</div>
		</div>
	);
};

export default CellIcon;
