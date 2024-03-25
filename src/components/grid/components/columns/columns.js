//React
import React, { useContext, useMemo } from 'react';

//System
import { createContext } from 'opus-ui';

//Components
import DataColumn from './dataColumn';

//Helpers
import { getOrderedColIds } from './helpers';

const GridContext = createContext('grid');

const buildDataColumn = ({ state: { wgts } }, colId) => {
	const col = wgts.find(({ id }) => id === colId) || { id: colId };

	const type = col.type || 'string';
	const caption = col.cpt ?? col.id;

	const dataColumnProps = {
		caption,
		fieldName: col.id,
		type
	};

	return <DataColumn key={col.id} {...dataColumnProps} />;
};

export const DataColumns = () => {
	const props = useContext(GridContext);
	const { getHandler, state: { wgts } } = props;

	const wgtDelta = wgts.map(({ id }) => id).join('');
	const orderedIds = useMemo(getHandler(getOrderedColIds), [wgtDelta]);

	const result = orderedIds.map(buildDataColumn.bind(null, props));

	return result;
};

const Columns = () => {
	return (
		<div className='columns'>
			<DataColumns />
		</div>
	);
};

export default Columns;
