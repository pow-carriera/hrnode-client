import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    users: []
  });

  function getManyUsers() {
    axios
      .get("users")
      .then((res) => {
        state.users = res.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getfilteredManyUsers(filterBy: string, value: string) {
    axios
      .get(`users?filterby=${filterBy}&value=${value}`)
      .then((res) => {
        state.users = res.data.data
      }) // Good ending, 200 OK Response Status
      .catch(() => {

      }) // Bad ending, hindi makaconnect/404
      .finally(() => { console.log("Finally clause.")}) // Finally, kahit anong mangyari, mangyayari
  }

  function getSortedManyUsersBy(field: string, order = 'desc') {
    axios
      .get(`users?sortby=${field}&order=${order}`)
      .then((res) => {
        state.users = res.data.data
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { state, getManyUsers, getfilteredManyUsers, getSortedManyUsersBy };
});
