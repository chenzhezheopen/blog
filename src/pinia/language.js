/*
 * @Date: 2021-12-31
 * @Description: useLanguageStore
 */

import { defineStore } from "pinia";
import { _translate } from "@/api";
import { Toast } from "vant";
import cookie from "@/utils/cookie";

export const useLanguageStore = defineStore("language", {
    state: () => ({
        ccy: "USD",
        rate: 1,
        LocalRate: {},
    }),
    actions: {
        async loadLanguage(cb) {
            const res = await _translate.queryLocalLanguage();
            if (res.status === "success") {
                //根据语言 setCookie => 对插件进行默认设置
                cookie.set("googtrans", "/auto/" + res.result.language);
                //根据货币 汇率 渲染格式化
                cb && typeof cb === "function" && cb(res.result.language);
                this.LocalRate = res.result;
            }
        },
        async selectLanguage(payload) {
            // 防止初始化第一次报错
            if (!payload) return;
            const res = await _translate.queryLanguage(payload.split("/")[2]);
            if (res.status === "success") {
                // const { quoteCcy: ccy, rate } = res.result;

                // this.ccy = ccy;
                // this.rate = rate;
            } else {
                Toast(res.errorMsg);
            }
        },
        setRate(val) {
            this.rate = val;
        },
        setccy(val) {
            this.ccy = val;
        }
    },
    persist: {
        storage: window.sessionStorage,
    },
});
