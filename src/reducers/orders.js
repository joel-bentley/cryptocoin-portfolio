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
      const newOrdersArray = Object.values(state).filter(
        order => order.assetName !== action.assetName
      );
      let newState = {};
      for (let order of newOrdersArray) {
        newState[order.id] = order;
      }
      return newState;
    case types.EDIT_ORDER:
    default:
      return state;
  }
}

// Actions
export const actions = {
  addOrder: order => ({ type: types.ADD_ORDER, order }),
  removeOrder: id => ({ type: types.REMOVE_ORDER, id }),
  removeAllAssetOrders: assetName => ({
    type: types.REMOVE_ALL_ASSET_ORDERS,
    assetName,
  }),
  editOrder: order => ({ type: types.EDIT_ORDER, order }),
};

// Selectors
export const selectors = {
  getOrders: state => Object.values(state.orders),
  getAssetOrders: (state, assetName) =>
    selectors.getOrders(state).filter(order => order.assetName === assetName),
  getAssetHoldings: (state, assetName) =>
    selectors.getAssetOrders(state, assetName).reduce((acc, order) => {
      switch (order.type) {
        case 'BUY':
          return acc + order.quantity;
        case 'SELL':
          return acc - order.quantity;
        default:
          return acc;
      }
    }, 0),
  getAssetBookValue: (state, assetName) =>
    selectors.getAssetOrders(state, assetName).reduce((acc, order) => {
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
