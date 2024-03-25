//React
import React from 'react';

//System Helpers
import { generateClassNames } from 'opus-ui';

//Components
import { CellComponents } from './cellComponents/cellComponents';

//Components
const CellInner = (
	{ type, value, className, handlerClickCell, handlerHoverCell, handlerLeaveCell, style }
) => {
	return (
		<div
			className={className}
			onClick={handlerClickCell}
			onMouseOver={handlerHoverCell}
			onMouseLeave={handlerLeaveCell}
		>
			<CellComponents
				type={type}
				value={value}
				style={style}
			/>
		</div>
	);
};

const Cell = React.memo(props => {
	const { id, value, type, fieldName, rowNum } = props;
	const { isSelected, isHovered } = props;
	const { onClick, onHover, onExit } = props;

	const className = generateClassNames(`cell type-${type}`, {
		selected: isSelected,
		hovered: isHovered
	});

	return (
		<CellInner
			id={id}
			type={type}
			fieldName={fieldName}
			rowNumber={rowNum}
			value={value}
			className={className}
			handlerClickCell={onClick}
			handlerLeaveCell={onExit}
			handlerHoverCell={onHover}
		/>
	);
}, (
	{ isHovered: aHovered, isSelected: aSelected, isChanged: aChanged, value: aValue },
	{ isHovered: bHovered, isSelected: bSelected, isChanged: bChanged, value: bValue }
) => {
	return (
		aHovered === bHovered && aSelected === bSelected && aChanged === bChanged && aValue === bValue
	);
});

export default Cell;

