//Helpers
import { selectRow } from '../helpers/helpers';

//Event
const onClickCell = (props, data, rowNumber, e) => {
	if (e)
		e.stopPropagation();

	const { state } = props;
	const { canDeselect, selectedRow, handlerOnClick } = state;

	if (!canDeselect && selectedRow === rowNumber)
		return;

	const value = data[rowNumber];

	selectRow(props, rowNumber);

	if (handlerOnClick)
		handlerOnClick(value, rowNumber);
};

export default onClickCell;
