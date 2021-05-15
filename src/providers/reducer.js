export const initialState = {
  activeCategory: "Gatos",
};

export const actionTypes = {
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.activeCategory,
      };
    default:
      return state;
  }
};

export default reducer;
