export const types = {
  FETCH_NEW_TIME: 'TIME/SAGAS/FETCH_NEW_TIME',
  SET_NEW_TIME: 'TIME/SET_NEW_TIME',
};

const initialState = { lastUpdateTime: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NEW_TIME:
      return { ...state, lastUpdateTime: action.dateTime };
    default:
      return state;
  }
}

export const actions = {
  fetchNewTime: () => ({
    type: types.FETCH_NEW_TIME,
  }),
  setNewTime: dateString => ({
    type: types.SET_NEW_TIME,
    dateTime: dateString,
  }),
};

export const selectors = {
  getLastUpdateTime: state => state.time.lastUpdateTime,
};
