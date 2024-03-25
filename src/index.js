/* eslint-disable max-lines-per-function, max-lines */

//System
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { Grid } from './components/grid';

//PropSpecs
import propsGrid from './components/grid/props';

//Opus Lib
import Opus from 'opus-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Opus
		registerComponentTypes={[{
			type: 'grid',
			component: Grid,
			propSpec: propsGrid
		}]}
		startupMda={{
			type: 'containerSimple',
			prps: {
				singlePage: true,
				mainAxisAlign: 'center',
				crossAxisAlign: 'center'
			},
			wgts: [{
				type: 'grid',
				prps: {
					staticData: [{
						a: 10,
						b: 'abc',
						c: true
					}, {
						a: 20,
						b: 'def',
						c: false
					}]
				}
			}]
		}}
	/>
);
