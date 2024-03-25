/* eslint-disable max-lines, max-len */

//CSS Map Functions
import { mapToColor, mapToSize, propsSharedDataLoader, propsSharedDataLoaderExternal } from 'opus-ui';

//Props
import internalProps from './internalProps';

//Props
const props = {
	fillHeight: {
		type: 'boolean',
		desc: 'When true, the grid will use all the available height',
		classMap: true
	},
	noBg: {
		type: 'boolean',
		desc: 'When true, the grid\'s background will be removed',
		dft: false,
		classMap: true
	},
	canDeselect: {
		type: 'boolean',
		desc: 'When false, rows cannot be de-selected',
		dft: true
	},
	colorCellText: {
		type: 'string',
		desc: 'The color of each grid cell\'s text',
		dft: 'primary',
		cssVar: 'color-cell-text',
		cssVarVal: mapToColor
	},
	colorHeaderCellText: {
		type: 'string',
		desc: 'The color of each grid header cell\'s text',
		dft: 'primary',
		cssVar: 'color-header-cell-text',
		cssVarVal: mapToColor
	},
	colorHeaderCellBorder: {
		type: 'string',
		desc: 'The color of each grid header cell\'s text',
		dft: 'primary',
		cssVar: 'color-header-cell-border',
		cssVarVal: mapToColor
	},
	colorRowDivider: {
		type: 'string',
		desc: 'The color of each grid cell\'s top border',
		dft: 'primary',
		cssVar: 'color-row-divider',
		cssVarVal: mapToColor
	},
	colorRowSelectedBg: {
		type: 'string',
		desc: 'The background color of the selected row',
		dft: 'primary',
		cssVar: 'color-row-selected-bg',
		cssVarVal: mapToColor
	},
	colorRowBg: {
		type: 'string',
		desc: 'The background color the row',
		dft: 'transparent',
		cssVar: 'color-row-bg',
		cssVarVal: mapToColor
	},
	colorCellTextSelected: {
		type: 'string',
		desc: 'The color of the cell text when the row is selected',
		dft: 'primary',
		cssVar: 'color-cell-text-selected',
		cssVarVal: mapToColor
	},
	colorRowHoverBg: {
		type: 'string',
		desc: 'The background color of the selected row',
		dft: 'primary',
		cssVar: 'color-row-hover-bg',
		cssVarVal: mapToColor
	},
	colorCellTextHover: {
		type: 'string',
		desc: 'The color of the cell text when the row is hovered',
		dft: 'primary',
		cssVar: 'color-cell-text-hover',
		cssVarVal: mapToColor
	},
	colorChipBorder: {
		type: 'string',
		desc: 'The border color of action bar chips',
		dft: 'primary',
		cssVar: 'color-chip-border',
		cssVarVal: mapToColor
	},
	colorChipText: {
		type: 'string',
		desc: 'The text color of action bar chips',
		dft: 'primary',
		cssVar: 'color-chip-text',
		cssVarVal: mapToColor
	},
	noRecordsMsg: {
		type: 'string',
		msg: 'The message that displays in the grid when a result-set contains no records',
		dft: 'No records returned'
	},
	headerCellFontSize: {
		type: 'string',
		msg: 'The header cell font size',
		dft: 'fontSizeBig',
		cssVar: 'header-cell-font-size',
		cssVarVal: mapToSize
	},
	cellFontSize: {
		type: 'string',
		msg: 'The cell font size',
		dft: 'fontSize',
		cssVar: 'cell-font-size',
		cssVarVal: mapToSize
	},
	headerRowHeight: {
		type: 'string',
		msg: 'The height of the header row',
		cssVar: 'header-row-height',
		cssVarVal: mapToSize
	},
	rowHeight: {
		type: 'string',
		msg: 'The height of each row',
		cssVar: 'row-height',
		cssVarVal: mapToSize
	}
};

export default Object.assign(props, internalProps, propsSharedDataLoader, propsSharedDataLoaderExternal, {
	//Overrides
	pageSize: { dft: 10 }
});
