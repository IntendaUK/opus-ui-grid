export const getData = props => {
	const { setWgtState, state: { dataLoaderId } } = props;

	setWgtState(dataLoaderId, { needsNewData: true });
};
