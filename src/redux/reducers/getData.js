const initialState = {
  data: [],
};


const getData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default getData;
