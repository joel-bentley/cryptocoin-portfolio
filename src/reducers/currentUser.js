export const types = {
  LOGIN: 'USER/LOGIN',
  LOGOUT: 'USER/LOGOUT',
};

const initialState = { currentUser: {}, loggedIn: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, currentUser: action.payload, loggedIn: true };
    case types.LOGOUT:
      return { ...state, currentUser: {}, loggedIn: false };
    default:
      return state;
  }
}

export const actions = {
  login: user => ({ type: types.LOGIN, payload: user }),
  logout: () => ({ type: types.LOGOUT }),
};
