export const initialState = {
  data: [],
  report: null,
  type: 1,
  mobile: null,
  id: null,
  userId: null,
  cityId: null,
  barData: null,
  data2: null,
  showID:null
};
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.value,
      };
    case "SET_REPORT":
      return {
        ...state,
        report: action.value,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.value,
      };
    case "SET_MOBILE":
      return {
        ...state,
        mobile: action.value,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.value,
      };
    case "SET_CITY_ID":
      return {
        ...state,
        cityId: action.value,
      };
    case "SET_BAR_DATA":
      return {
        ...state,
        barData: action.value,
      };
    case "SET_ID":
      return {
        ...state,
        id: action.value,
      };
    case "SET_SHOW_ID":
      return {
        ...state,
        showID: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
