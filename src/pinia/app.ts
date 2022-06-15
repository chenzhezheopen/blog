
import { defineStore } from "pinia";

export const useAppStore = defineStore('app',{
    state: () => ({
        isNavbar: false,
        isThemeDark: false,
        //title
        pageTitle:'---'
    }),
    actions: {
        changeNavBar(isNavbar:boolean) {
            console.log(isNavbar);
            this.isNavbar=isNavbar
        }
    }
})