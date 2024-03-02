import compose from 'compose-function';

import {withSafeArea} from './withSafeArea';
import {withNavigation} from './withNavigation';
import {withQuery} from './withQuery';

export const withProviders = compose(withQuery, withSafeArea, withNavigation);
