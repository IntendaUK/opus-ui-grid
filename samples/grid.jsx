//Imports
import React from 'react';
import { createRoot } from 'react-dom/client';

import Opus from '@intenda/opus-ui';
import './library';

//Sample
createRoot(document.getElementById('root'))
	.render(
		<Opus
			startupMda={{
				type: 'containerSimple',
				prps: { singlePage: true },
				wgts: [{
					type: 'grid',
					prps: {
						staticData: [{
							age: 30,
							name: 'Arthur',
							likesBeans: true
						}, {
							age: 35,
							name: 'Mary',
							likesBeans: false
						}]
					}
				}]
			}}
		/>
	);
