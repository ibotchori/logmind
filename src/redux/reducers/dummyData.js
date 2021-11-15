const initialState = {
  data: [
    {
      time: "2020-11-04 06:25:01",
      count: "44 000",
      priority: "high",
    },
    {
      time: "2020-11-03 06:25:01",
      count: "24 000",
      priority: "low",
    },
    {
      time: "2020-11-02 06:25:01",
      count: "34 000",
      priority: "medium",
    },
    {
      time: "2020-11-01 06:25:01",
      count: "14 000",
      priority: "high",
    },
    {
      time: "2020-11-03 06:25:01",
      count: "4 000",
      priority: "low",
    },
    {
      time: "2020-11-04 06:25:01",
      count: "14 000",
      priority: "high",
    },
    {
      time: "2020-11-04 06:25:01",
      count: "2 000",
      priority: "high",
    },
    {
      time: "2020-11-04 06:25:01",
      count: "3 000",
      priority: "medium",
    },
  ],
};
const getDummyData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default getDummyData;
