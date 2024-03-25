//React
import React from 'react';

//Components
import CellIcon from './cellIcon';
import CellBadge from './cellBadge';
import CellCheckbox from './cellCheckbox';
import CellProgressBar from './cellProgressBar';
import { CellDateTime, CellDate, CellTime } from './cellDateTime';

//Helpers
import { getDateObject } from '../../helpers/cellComponents';

//Components
export const CellComponents = ({ type, value = '', style }) => {
	if (type === 'checkbox')
		return <CellCheckbox value={!!value} />;
	else if (type === 'icon')
		return <CellIcon value={value} style={style} />;
	else if (type === 'progressBar')
		return <CellProgressBar value={value} style={style} />;
	else if (type === 'badge')
		return <CellBadge value={value} style={style} />;

	if (['date', 'time', 'datetime'].includes(type)) {
		const dateObject = getDateObject(value);

		if (!(dateObject instanceof Date))
			return <div>{value}</div>;
		if (type === 'date')
			return <CellDate dateObject={dateObject} />;
		if (type === 'time')
			return <CellTime dateObject={dateObject} />;
		if (type === 'datetime')
			return <CellDateTime dateObject={dateObject} />;
	}

	if (value !== null && typeof (value) === 'object')
		value = JSON.stringify(value);

	return <span style={style}>{value}</span>;
};
