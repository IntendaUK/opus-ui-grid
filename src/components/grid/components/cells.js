//React
import React, { useContext } from 'react';

//System
import { createContext } from '@intenda/opus-ui';

//Helpers
import { isRowSelected } from '../helpers/isRowSelected';

//Events
import { onHoverCell, onExitCell } from '../events/events';
import onClickCell from '../events/onClickCell';

//Components
import Cell from './cell';

//Context
const GridContext = createContext('grid');

//Components
const GridCells = ({ type, field }) => {
	const props = useContext(GridContext);
	const { getHandler, state } = props;
	const { hoveredRow, formats, data, changedRows = {} } = state;

	return data.map((d, i) => {
		const key = field + '' + i;
		const isChanged = changedRows[i];
		const isSelected = isRowSelected(props, i);

		const onClick = getHandler(onClickCell, data, i);
		const onHover = getHandler(onHoverCell, i);
		const onExit = getHandler(onExitCell, i);

		return (
			<Cell
				key={key}
				id={key}
				isSelected={isSelected}
				isHovered={i === hoveredRow}
				isChanged={isChanged}
				value={d[field]}
				record={d}
				type={type}
				rowNum={i}
				fieldName={field}
				formats={formats}
				onClick={onClick}
				onHover={onHover}
				onExit={onExit}
			/>
		);
	});
};

export default GridCells;
