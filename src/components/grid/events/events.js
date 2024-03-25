//Helpers
import { mockWidgets } from '../helpers/helpers';

//Events
export const onMount = props => {
	const { setState, wgts, state: { defaultSort, pageSize } } = props;

	const sortState = defaultSort ? {
		sortField: defaultSort[0],
		sortAscending: defaultSort[1]
	} : null;

	const hasDynamicWidgets = !wgts || !wgts.length;

	if (!hasDynamicWidgets) {
		wgts.forEach(w => {
			if (!w.type)
				w.type = 'input';
		});
	}

	//If this component doesn't have a dtaObj we assume data will be provided
	// and as such loading does not have to be true
	setState({
		pageSize,
		offset: 0,
		wgts,
		hasDynamicWidgets,
		...sortState
	});
};

export const onValueChange = ({ state: { handlerOnChange, value, selectedRow } }) => {
	if (handlerOnChange)
		handlerOnChange(value, selectedRow);
};

export const onSelectedRowChange = (
	{ setState, state: { selectedRow, data, value } }
) => {
	if (!data || selectedRow === -1) {
		if (value !== undefined)
			setState({ deleteKeys: ['value'] });

		return;
	}

	const newValue = data[selectedRow];

	setState({ value: newValue });
};

export const onHoverCell = ({ setState }, rowNumber) => {
	setState({ hoveredRow: rowNumber });
};

export const onExitCell = ({ setState }) => {
	setState({ hoveredRow: -1 });
};

export const onGetData = (props, data) => {
	const { setState, state } = props;
	const { wgts = [], hasDynamicWidgets, forceLoadData } = state;

	if (!data || !data.length)
		return;

	const recalcWidgets = (
		hasDynamicWidgets &&
		Object.keys(data[0]).join('') !== wgts.map(w => w.id).join('')
	);

	if (recalcWidgets) {
		const mockedWidgets = mockWidgets(data);
		setState({ wgts: mockedWidgets });
	}

	if (forceLoadData)
		setState({ forceLoadData: false });
};
