const initialState = {
  main: {
    count: 0,
    favoriteCompany: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        main: {
          ...state.main,
          count: state.main.count + action.payload,
        },
      };
    case "ADD_FAVORITE_COMPANY":
      return {
        ...state,
        main: {
          ...state.main,
          favoriteCompany: [...state.main.favoriteCompany, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
