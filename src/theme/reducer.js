import modes from './modes';

const defaultState = {
  mode: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_THEME':
      return {
        ...state,
        mode: modes.opposite(state.mode),
      };
    default:
      return state;
  }
};
