export const types = {
  FETCH_NEW_TIME: 'TIME/FETCH_NEW_TIME',
  SET_NEW_TIME: 'TIME/SET_NEW_TIME',
};

export const initialState = { currentTime: new Date().toString() };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NEW_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
}

export const actions = {
  fetchNewTime: () => ({
    type: types.FETCH_NEW_TIME,
  }),
  setNewTime: dateString => ({ type: types.SET_NEW_TIME, payload: dateString }),
};
