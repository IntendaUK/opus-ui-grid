export const isRowSelected = ({ state: { multiSelect, selectedRow, selectedRows } }, rowNumber) => {
	if (multiSelect)
		return selectedRows.includes(rowNumber);

	return selectedRow === rowNumber;
};
