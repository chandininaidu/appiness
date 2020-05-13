import { GET_DASHBOARD_DETAILS, GET_LOGIN_DETAILS } from "./action";
const initialState = {
  dashboardDetails: [{}],
  loginData: {},
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DETAILS:
      return {
        ...state,
        dashboardDetails: action.payload,
      };
    case GET_LOGIN_DETAILS:
      return {
        ...state,
        loginData: action.payload,
      };

    default:
      return state;
  }
};
