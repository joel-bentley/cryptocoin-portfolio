import merge from 'lodash/merge';
import sampleData from '../data/sampleData.json';

// Types
export const types = {
  ADD_ASSET: 'ADD_ASSET',
  REMOVE_ASSET: 'REMOVE_ASSET',
  EDIT_ASSET: 'EDIT_ASSET',
  GET_LATEST_PRICES: 'GET_LATEST_PRICES',
  REFRESH_PRICES: 'REFRESH_PRICES',
};

// Initial State
const initialState = sampleData.portfolio;

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ASSET:
      return merge({}, state, {
        [action.assetName]: { name: action.assetName, lastPrice: 0 },
      });
    case types.REMOVE_ASSET:
    case types.EDIT_ASSET:
    default:
      return state;
  }
}

// Actions
export const actions = {
  addAsset: assetName => ({ type: types.ADD_ASSET, assetName }),
  removeAsset: id => ({ type: types.REMOVE_ASSET, id }),
  editAsset: asset => ({ type: types.EDIT_ASSET, asset }),
};

// Selectors
export const selectors = {
  getPortfolio: state => Object.values(state.portfolio),
};
