//React
import React from 'react';

//Components
const CellCheckbox = ({ value, onClickHandler }) => {
	const iconClass = `checkbox icon${value ? ' checked' : ''}`;

	const icon = {
		true: 'check_box',
		false: 'check_box_outline_blank',
		null: 'indeterminate_check_box'
	}[value];

	return (
		<div className={iconClass}>
			<div className='material-icons icon' onClick={onClickHandler}>
				{icon}
			</div>
		</div>
	);
};

export default CellCheckbox;
