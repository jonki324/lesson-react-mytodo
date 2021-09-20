import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'react-fast-compare';
import { RootState } from '../../app/store';

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const deepEqualSelector = (selector: (state: RootState) => any) => {
  return createDeepEqualSelector(selector, (item) => item);
};
