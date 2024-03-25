//React
import React from 'react';

//Helpers
const extractValuesFromDate = dateObj => {
	const day = dateObj.getUTCDate();
	const month = dateObj.getUTCMonth() + 1;
	const year = dateObj.getUTCFullYear();

	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	const seconds = dateObj.getSeconds();

	const dateValues = day ? {
		day,
		month,
		year
	} : false;

	const timeValues = hours || hours === 0 ? {
		hours,
		minutes,
		seconds
	} : false;

	return {
		dateValues,
		timeValues
	};
};

//Components
export const CellTime = ({ dateObject }) => {
	const { timeValues } = extractValuesFromDate(dateObject);
	const timeString = `${timeValues.hours}:${timeValues.minutes}:${timeValues.seconds}`;

	return (
		<div className='gridCellTime'>
			{timeString}
		</div>
	);
};

export const CellDate = ({ dateObject }) => {
	const { dateValues } = extractValuesFromDate(dateObject);
	const dateString = `${dateValues.day}/${dateValues.month}/${dateValues.year}`;

	return (
		<div className='gridCellDate'>
			{dateString}
		</div>
	);
};

export const CellDateTime = ({ dateObject }) => {
	return (
		<div className='gridCellDateTime'>
			<CellDate dateObject={dateObject} />
			<CellTime dateObject={dateObject} />
		</div>
	);
};
