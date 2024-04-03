//React
import React, { useContext } from 'react';

//System
import { createContext, generateClassNames } from '@intenda/opus-ui';

//Components
import Cells from '../cells';
import HeaderCell from '../headerCell';

const GridContext = createContext('grid');

const DataColumn = ({ caption, fieldName, type }) => {
	const { state: { data } } = useContext(GridContext);

	const classNames = generateClassNames('column', { [type]: type });

	return (
		<div className={classNames} field={fieldName}>
			<HeaderCell
				caption={caption}
				fieldName={fieldName}
			/>
			{data ? <Cells type={type} field={fieldName} /> : null}
		</div>
	);
};

export default DataColumn;
