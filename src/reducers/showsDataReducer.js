export const initialState = {
  showsData: [],
  showsLoading: false,
  showsDataError: false,
};

export const showsDataReducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        showsLoading: true,
      };
    }
    case "SHOWS_DATA": {
      return {
        ...state,
        showsData: action.payload,
        showsLoading: false,
      };
    }
    case "SHOWS_DATA_ERROR": {
      return {
        ...state,
        showsLoading: false,
        showsDataError: true,
      };
    }
    default: {
      return state;
    }
  }
};
