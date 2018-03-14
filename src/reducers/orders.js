import sampleData from '../data/sampleData.json';

// Types
export const types = {
  ADD_ORDER: 'ORDERS/ADD_ORDER',
  REMOVE_ORDER: 'ORDERS/REMOVE_ORDER',
  REMOVE_ALL_ASSET_ORDERS: 'ORDERS/REMOVE_ALL_ASSET_ORDERS',
  EDIT_ORDER: 'ORDERS/EDIT_ORDER',
};

// Initial State
const initialState = sampleData.orders;

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ORDER:
    case types.REMOVE_ORDER:
    case types.REMOVE_ALL_ASSET_ORDERS:
    case types.EDIT_ORDER:
    default:
      return state;
  }
}

// Actions
export const actions = {
  addOrder: order => ({ type: types.ADD_ORDER, order }),
  removeOrder: id => ({ type: types.REMOVE_ORDER, id }),
  editOrder: order => ({ type: types.EDIT_ORDER, order }),
};

// Selectors
export const selectors = {
  getOrdersOfAsset: (state, assetName) =>
    Object.values(state.orders).filter(order => order.assetName === assetName),
  getHoldingsOfAsset: (state, assetName) =>
    selectors.getOrdersOfAsset(state, assetName).reduce((acc, order) => {
      switch (order.type) {
        case 'BUY':
          return acc + order.quantity;
        case 'SELL':
          return acc - order.quantity;
        default:
          return acc;
      }
    }, 0),
  getBookValueOfAsset: (state, assetName) =>
    selectors.getOrdersOfAsset(state, assetName).reduce((acc, order) => {
      switch (order.type) {
        case 'BUY':
          return acc + order.quantity * order.price;
        case 'SELL':
          return acc - order.quantity * order.price;
        default:
          return acc;
      }
    }, 0),
};
