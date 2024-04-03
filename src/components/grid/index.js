//React
import React, { useEffect, useContext } from 'react';

//System
import { createContext, ThemedComponent, useEffectSkipFirst, DataLoaderHelper } from '@intenda/opus-ui';

//Components
import Columns from './components/columns/columns';

//Events
import { onMount, onGetData, onValueChange, onSelectedRowChange } from './events/events';

//Styles
import './styles/styles.css';
import './styles/cells.css';

//Context
const GridContext = createContext('grid');

//Components
const EmptyGrid = () => {
	const { id, state: { noRecordsMsg } } = useContext(GridContext);

	return (
		<ThemedComponent mda={{
			id,
			parentId: id,
			index: 'emptyGridLabel',
			type: 'label',
			prps: { cpt: noRecordsMsg }
		}} />
	);
};

const GridInner = () => {
	const { state: { data, wgts, noRender } } = useContext(GridContext);

	if (data && !data.length)
		return <EmptyGrid />;
	else if (!data || !wgts?.length || noRender)
		return null;

	return (
		<Columns />
	);
};

//Exports
export const Grid = props => {
	const { id, classNames, style, getHandler, attributes, state } = props;
	const { data, value, selectedRow } = state;

	useEffect(getHandler(onMount), []);
	useEffect(getHandler(onGetData, data), [data]);
	useEffectSkipFirst(getHandler(onValueChange), value);
	useEffect(getHandler(onSelectedRowChange, data), [data, selectedRow]);

	return (
		<GridContext.Provider value={props}>
			<div
				id={id}
				className={classNames}
				style={style}
				{...attributes}
			>
				<DataLoaderHelper ownerPrps={props} />
				<GridInner />
			</div>
		</GridContext.Provider>
	);
};
