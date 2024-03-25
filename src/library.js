//Components
import { Grid } from './components/grid';

//PropSpecs
import propsGrid from './components/grid/props';

import { registerComponentTypes } from 'opus-ui';

registerComponentTypes([{
	type: 'grid',
	component: Grid,
	propSpec: propsGrid
}]);
