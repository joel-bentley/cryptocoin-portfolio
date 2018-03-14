// import { createSelector } from 'reselect';
// TODO: use reselect to memoize selectors,
//       so that if one asset is updated, only that row
//       (and totals) are recalculated

import { combineReducers } from 'redux';

import { selectors as assetsSelectors } from './assets';
import { selectors as ordersSelectors } from './orders';

import currentTimeReducer from './currentTime';
import currentUserReducer from './currentUser';
import assetsReducer from './assets';
import ordersReducer from './orders';

// Reducer
export default combineReducers({
  time: currentTimeReducer,
  user: currentUserReducer,
  assets: assetsReducer,
  orders: ordersReducer,
});

// Selectors
export const selectors = {
  calculateHoldings: state => {
    const portfolio = assetsSelectors.getAssets(state);

    for (let asset of portfolio) {
      asset.quantity = ordersSelectors.getHoldingsOfAsset(state, asset.name);

      asset.marketValue = asset.quantity * asset.lastPrice;

      asset.bookValue = ordersSelectors.getBookValueOfAsset(state, asset.name);

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

    return { overview, portfolio };
  },
};
