import moment from 'moment';

export const types = {
  SET_UPDATE_TIME: 'time/GET_CURRENT_TIME',
};

const initialState = { lastUpdateTime: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_UPDATE_TIME:
      return { ...state, lastUpdateTime: moment().toISOString() };
    default:
      return state;
  }
}

export const actions = {
  setNewTime: () => ({
    type: types.SET_UPDATE_TIME,
  }),
};

export const selectors = {
  getLastUpdateTime: state => state.time.lastUpdateTime,
};
