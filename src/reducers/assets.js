// This project uses modified 'ducks' redux project structure:
//   http://mmazzarolo.com/blog/my-journey-toward-a-maintainable-project-structure-for-react/redux/

import cloneDeep from 'lodash/cloneDeep';
import sampleData from '../data/sampleData.json';

// Types
export const types = {
  ADD_ASSET: 'assets/ADD_ASSET',
  REMOVE_ASSET: 'assets/REMOVE_ASSET',
  FETCH_CURRENT_PRICES: 'assets/sagas/FETCH_CURRENT_PRICES',
  UPDATE_PRICES: 'assets/UPDATE_PRICES',
};

// Initial State
const initialState = sampleData.assets;

// Reducer
export default function reducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case types.ADD_ASSET:
      return {
        ...newState,
        [action.assetName]: { name: action.assetName, lastPrice: 0 },
      };
    case types.REMOVE_ASSET:
      delete newState[action.assetName];
      return newState;
    case types.UPDATE_PRICES:
      for (let key in action.prices) {
        if (newState[key]) {
          newState[key].lastPrice = action.prices[key].USD;
        }
      }
      return newState;
    default:
      return newState;
  }
}

// Actions
export const actions = {
  addAsset: assetName => ({ type: types.ADD_ASSET, assetName }),
  removeAsset: assetName => ({ type: types.REMOVE_ASSET, assetName }),
  fetchCurrentPrices: assetList => ({
    type: types.FETCH_CURRENT_PRICES,
    assetList,
  }),
  updatePrices: prices => ({ type: types.UPDATE_PRICES, prices }),
};

// Selectors
export const selectors = {
  getAssets: state => cloneDeep(state.assets),
  getAssetsArray: state => Object.values(selectors.getAssets(state)),
};
