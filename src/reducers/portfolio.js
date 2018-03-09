// import { createSelector } from 'reselect';
// TODO: use reselect to memoize selectors,
//       so that if one asset is updated, only that row
//       (and totals, and % of portfolio column) are recalculated

import sortBy from 'lodash/sortBy';
import sampleData from '../sampleData.json';

// Types
export const types = {
  ADD_ASSET: 'ADD_ASSET',
  REMOVE_ASSET: 'REMOVE_ASSET',
  EDIT_ASSET: 'EDIT_ASSET',
  GET_LATEST_PRICES: 'GET_LATEST_PRICES',
  REFRESH_PRICES: 'REFRESH_PRICES',
};

// Initial State
export const initialState = sampleData.portfolio;

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ASSET:
    case types.REMOVE_ASSET:
    case types.EDIT_ASSET:
    default:
      return state;
  }
};

// Actions
export const actions = {
  addAsset: assetName => ({ type: types.ADD_ASSET, payload: assetName }),
  removeAsset: id => ({ type: types.REMOVE_ASSET, payload: id }),
  editAsset: asset => ({ type: types.EDIT_ASSET, payload: asset }),
};

// Selectors
export const selectors = {
  calculateHoldings: state => {
    const portfolio = Object.values(state.portfolio);

    for (let asset of portfolio) {
      asset.orders = sortBy(Object.values(asset.orders), ['date']);

      asset.quantity = asset.orders.reduce(
        (acc, order) => acc + order.quantity,
        0
      );

      asset.marketValue = asset.quantity * asset.price;

      asset.bookValue = asset.orders.reduce(
        (acc, order) => acc + order.quantity * order.price,
        0
      );

      asset.unrealizedGain = asset.marketValue - asset.bookValue;
      asset.unrealizedGainPercent = asset.unrealizedGain / asset.bookValue;
    }

    const overview = {
      totalMarketValue: portfolio.reduce(
        (acc, asset) => acc + asset.marketValue,
        0
      ),
      totalBookValue: portfolio.reduce(
        (acc, asset) => acc + asset.bookValue,
        0
      ),
      totalUnrealizedGain: portfolio.reduce(
        (acc, asset) => acc + asset.unrealizedGain,
        0
      ),
    };

    overview.totalUnrealizedGainPercent =
      overview.totalUnrealizedGain / overview.totalBookValue;

    // for (let asset of portfolio) {
    //   asset.portfolioPercent = asset.marketValue / overview.totalMarketValue;
    // }

    return { overview, portfolio };
  },
};
