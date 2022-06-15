/*
 * @Date: 2021-12-31
 * @Description: useUserStore
 */

import { defineStore } from "pinia";
import { _product, _user, _shopCart } from "@/api";
import { removeToken } from "@/utils/auth";

import { usePluginStore } from "./plugin";

export const useUserStore = defineStore("user", {
    state: () => ({
        // 邮箱
        email: "",
        firstName: "",
        lastName: "",
        nickName: "",
        isConfirm: false,
        sex: null,
        region: "",
        country: "",
        // 心愿单下的productIdList
        starWishProductIdList: [],
        chatList: [],
        curShopKey: undefined,
        cart_number: 0,
    }),
    getters: {
        // 是否登录
        isLogin: (state) => state.email !== "",
        // 用户邮箱首字母
        avatarLetter: (state) => {
            if (state.email) {
                return state.nickName.charAt(0).toUpperCase();
            }
        },
        // username
        userName: (state) => `${state.firstName || ""} ${state.lastName || ""}`,
    },
    actions: {
        //   查询 用户信息
        async loadUserInfo() {
            const { result, status } = await _user.queryUserInfo();
            console.log("=>", "查询用户信息", result);
            if (status === "success") {
                this.updateUserInfo(result);
            }
        },
        updateUserInfo(payload) {
            this.email = payload.email;
            this.lastName = payload.lastName || "";
            this.firstName = payload.firstName || "";
            this.isConfirm = payload.isConfirm;
            this.sex = payload.sex || "Not Selected";
            this.nickName = payload.nickName;
            this.region = payload.region || "";
            this.country = payload.country || "";
        },
        // 退出登录
        async signOut() {
            // reset
            this.$reset();
            //  reset plugin
            const pluginStore = usePluginStore();
            //  存在倒计时 重置
            if (pluginStore.countDown) pluginStore.reset();
            //
            removeToken();
        },
        //  心愿单 productId 列表
        async loadStarWishProductIdList() {
            const { result } = await _user.queryStarWishProductIdList();
            this.starWishProductIdList = result;
        },
        //  心愿单 productId 列表
        async loadStarWishProductIdList() {
            const { result } = await _user.queryStarWishProductIdList();
            this.starWishProductIdList = result;
        },
        // 获取购物车数量
        async getShopcartNum() {
            const res = await _shopCart.getCartNum();
            this.cart_number = res.result;
        },
    },
});
