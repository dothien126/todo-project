import { defineStore } from "pinia";

import {
  requestGetAllUsers,
  requestDeleteUser,
  requestUpdateUser,
} from "../services/user";

import { updateUserFormType, userType } from "../types/use";

export const useUserStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    message: "",
  }),
  getters: {
    allUsers: (state) => state.users,
  },
  actions: {
    async getAllUsers() {
      const res = await requestGetAllUsers();

      if (res.data.success) {
        this.users = res.data.data;
        this.message = res.data.message;
      } else {
        this.users = [];
        this.message = res.data.message;
      }
    },
    async deleteUser(userId) {
      const res = await requestDeleteUser(userId);
      if (res.data.success) {
        this.users = this.users.filter((user) => user._id !== userId);
        this.message = res.data.message;
      } else {
        this.message = res.data.message;
      }
    },

    async UpdateUser(updateUserForm) {
      const res = await requestUpdateUser(updateUserForm);
      if (res.data.success) {
        const index = this.users.findIndex(
          (item) => item._id === res.data.data._id
        );
        // @ts-ignore
        this.users.splice(index, 1, res.data.data);
        this.message = res.data.message;
      } else {
        this.message = res.data.message;
      }
    },
  },
});