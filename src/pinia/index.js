/*
 * @Date: 2021-12-31
 * @Description:usrRootStore
 */
import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
  }),
  actions: {
  },
   persist: {
        storage: window.sessionStorage,
    }
});
