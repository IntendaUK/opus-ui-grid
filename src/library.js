//Components
import { Grid } from './components/grid';

//Components
export * from './libraryComponents';

//PropSpecs
import propsGrid from './components/grid/props';

import { registerComponentTypes } from '@intenda/opus-ui';

registerComponentTypes([{
	type: 'grid',
	component: Grid,
	propSpec: propsGrid
}]);
