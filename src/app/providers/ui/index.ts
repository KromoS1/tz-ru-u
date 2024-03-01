import compose from 'compose-function';

import {withSafeArea} from './withSafeArea';
import {withNavigation} from './withNavigation';

export const withProviders = compose(withSafeArea, withNavigation);
