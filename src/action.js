export const GET_DASHBOARD_DETAILS = "GET_DASHBOARD_DETAILS";
export const GET_LOGIN_DETAILS = "GET_LOGIN_DETAILS";
const dashboardDetails = [
  {
    id: 1,
    name: "test1",
    age: "11",
    gender: "male",
    email: "test1@gmail.com",
    phoneNo: "9415346313",
  },
  {
    id: 2,
    name: "test2",
    age: "12",
    gender: "female",
    email: "test2@gmail.com",
    phoneNo: "9415346312",
  },
  {
    id: 3,
    name: "test3",
    age: "13",
    gender: "male",
    email: "test3@gmail.com",
    phoneNo: "9415346314",
  },
  {
    id: 4,
    name: "test4",
    age: "14",
    gender: "female",
    email: "test4@gmail.com",
    phoneNo: "9415346315",
  },
  {
    id: 5,
    name: "test5",
    age: "15",
    gender: "male",
    email: "test5@gmail.com",
    phoneNo: "9415346316",
  },
  {
    id: 5,
    name: "test6",
    age: "16",
    gender: "male",
    email: "test6@gmail.com",
    phoneNo: "9415346318",
  },
];

const actions = {
  getLoginDetails: (payload) => ({
    type: GET_LOGIN_DETAILS,
    payload,
  }),
  getDashboardDetails: (payload) => ({
    type: GET_DASHBOARD_DETAILS,
    payload,
  }),
};

export const getLoginDetails = (data) => (dispatch) => {
  if (data.username === "hruday@gmail.com" && data.password === "hruday123") {
    dispatch(actions.getLoginDetails("success"));
    dispatch(actions.getDashboardDetails(dashboardDetails));
  } else if (
    data.username !== "hruday@gmail.com" &&
    data.password !== "hruday123"
  ) {
    dispatch(actions.getLoginDetails("Invalid username and password"));
  } else if (data.username !== "hruday@gmail.com") {
    dispatch(actions.getLoginDetails("Invalid username"));
  } else if (data.password !== "hruday123") {
    dispatch(actions.getLoginDetails("Invalid password"));
  }
};
