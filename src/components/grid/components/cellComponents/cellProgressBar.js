//React
import React from 'react';

//Components
const Section = ({ width, backgroundColor }) => {
	const useStyle = { width: width + '%' };
	if (backgroundColor)
		useStyle.backgroundColor = backgroundColor;

	return <div className='section' style={useStyle} />;
};

const CellProgressBar = ({ value, style: { colorFilled, colorUnfilled } }) => {
	const className = 'progressBar';

	const w = value * 100;

	return (
		<div className={className}>
			<Section width={w} backgroundColor={colorFilled} />
			<Section width={100 - w} backgroundColor={colorUnfilled} />
		</div>
	);
};

export default CellProgressBar;
