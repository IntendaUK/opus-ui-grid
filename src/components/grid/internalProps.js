/* eslint-disable max-lines, max-len */

//Props
const props = {
	value: {
		type: 'object',
		desc: 'An object containing the selected record\'s data',
		internal: true
	},
	selectedRow: {
		type: 'number',
		desc: 'The index of the selected grid row',
		dft: -1,
		persist: true,
		internal: true
	},
	wgts: {
		type: 'array',
		desc: 'A list of wgts for the grid',
		internal: true
	},
	forceLoadData: {
		type: 'boolean',
		desc: 'A boolean flag that when set to true, will force reload the grid for data',
		internal: true
	},
	hoveredRow: {
		type: 'integer',
		desc: 'The index of the hovered row',
		internal: true,
		dft: -1
	},
	hasDynamicWidgets: {
		type: 'boolean',
		desc: 'This gets set to true on mount if the grid did not receive wgts and as a result, wgts will be derived from data',
		internal: true
	}
};

export default props;
