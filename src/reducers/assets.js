import merge from 'lodash/merge';
import sampleData from '../data/sampleData.json';

// Types
export const types = {
  ADD_ASSET: 'ASSETS/ADD_ASSET',
  REMOVE_ASSET: 'ASSETS/REMOVE_ASSET',
  EDIT_ASSET: 'ASSETS/EDIT_ASSET',
  GET_LATEST_PRICES: 'ASSETS/GET_LATEST_PRICES',
  REFRESH_PRICES: 'ASSETS/REFRESH_PRICES',
};

// Initial State
const initialState = sampleData.assets;

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ASSET:
      return merge({}, state, {
        [action.assetName]: { name: action.assetName, lastPrice: 0 },
      });
    case types.REMOVE_ASSET:
      const newState = merge({}, state);
      delete newState[action.assetName];
      return newState;
    case types.EDIT_ASSET:
      return merge({}, state, ([action.asset.name]: asset));
    default:
      return state;
  }
}

// Actions
export const actions = {
  addAsset: assetName => ({ type: types.ADD_ASSET, assetName }),
  removeAsset: assetName => ({ type: types.REMOVE_ASSET, assetName }),
  editAsset: asset => ({ type: types.EDIT_ASSET, asset }),
};

// Selectors
export const selectors = {
  getAssets: state => Object.values(state.assets),
};
