//System
import { generateClassNames } from '@intenda/opus-ui';

export const calcClassNames = ({
	state: {
		loading,
		fillHeight,
		noBg = false,
		enabled = true,
		hasHeader = true,
		canFilter = true,
		hasToolbar = true
	}
}) => {
	return generateClassNames('cpnGrid', {
		disabled: !enabled,
		'fill-height': fillHeight,
		noHeader: !hasHeader,
		noFilter: !canFilter,
		noToolbar: !hasToolbar,
		noBg,
		loading
	});
};

export const mockWidgets = ([firstRow]) => {
	return Object.entries(firstRow)
		.map(([id, value]) => {
			const type = { boolean: 'checkbox' }[typeof(value)] || 'input';

			return {
				id,
				type,
				cpt: id
			};
		});
};

export const selectRow = ({ setState, state: { selectedRow } }, rowClicked) => {
	const selectedRowIndex = selectedRow === rowClicked ? -1 : rowClicked;
	setState({ selectedRow: selectedRowIndex });
};
