import { ADD_USER, DELETE_USER, SET_SELECTED_USER } from "../types/userType";

const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      userName: "man.nguyen",
      fullName: "Man Ng",
      password: "123",
      phoneNumber: "56323266262",
      email: "man@gmail.com",
      type: "Client",
    },
    {
      id: 2,
      userName: "tuan.nguyen",
      fullName: "Tuan Ng",
      password: "123",
      phoneNumber: "125563236262",
      email: "tuan@gmail.com",
      type: "Admin",
    },
  ],
  selectedUser: null,
};
export const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER: {
      const data = [...state.userList];

      data.push({
        ...payload,
        id: Date.now(),
      });

      state.userList = data;

      break;
    }

    case SET_SELECTED_USER: {
      state.selectedUser = payload;
      break;
    }

    case DELETE_USER: {
      state.userList = state.userList.filter((ele) =>
        ele.id === payload.id ? false : true
      );
      break;
    }

    default:
      break;
  }
  return { ...state };
};

