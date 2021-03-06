// This project uses modified 'ducks' redux project structure:
//   http://mmazzarolo.com/blog/my-journey-toward-a-maintainable-project-structure-for-react/redux/

import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import { generateRandomId } from '../util';

import sampleData from '../data/sampleData.json';

// Types
export const types = {
  ADD_ORDER: 'orders/ADD_ORDER',
  REMOVE_ORDER: 'orders/REMOVE_ORDER',
  REMOVE_ALL_ASSET_ORDERS: 'orders/REMOVE_ALL_ASSET_ORDERS',
  EDIT_ORDER: 'orders/EDIT_ORDER',
};

// Initial State
const initialState = sampleData.orders;

// Reducer
export default function reducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case types.ADD_ORDER:
      const id = generateRandomId();
      return {
        ...newState,
        [id]: {
          id,
          assetName: action.assetName,
          date: moment().toISOString(),
          type: 'BUY',
          quantity: 0,
          price: 0,
        },
      };
    case types.REMOVE_ORDER:
      delete newState[action.id];
      return newState;
    case types.REMOVE_ALL_ASSET_ORDERS:
      for (let key in newState) {
        if (newState[key].assetName === action.assetName) {
          delete newState[key];
        }
      }
      return newState;
    case types.EDIT_ORDER:
      return { ...newState, [action.order.id]: action.order };
    default:
      return state;
  }
}

// Actions
export const actions = {
  addOrder: assetName => ({ type: types.ADD_ORDER, assetName }),
  removeOrder: id => ({ type: types.REMOVE_ORDER, id }),
  removeAllAssetOrders: assetName => ({
    type: types.REMOVE_ALL_ASSET_ORDERS,
    assetName,
  }),
  editOrder: order => ({ type: types.EDIT_ORDER, order }),
};

// Selectors
export const selectors = {
  getOrders: state => cloneDeep(state.orders),
  getOrdersArray: state => Object.values(selectors.getOrders(state)),
  getAssetOrders: (state, assetName) =>
    selectors
      .getOrdersArray(state)
      .filter(order => order.assetName === assetName),
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
