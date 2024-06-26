export const getDateObject = dateValue => {
	let dateObject = null;

	if (!(dateValue instanceof Date))
		dateObject = new Date(dateValue);
	if (!isNaN(dateObject))
		return dateObject;

	return dateValue;
};
