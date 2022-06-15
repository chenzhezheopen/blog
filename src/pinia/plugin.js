/*
 * @Date: 2022-01-05
 * @Description: plugin
 */

import { defineStore } from "pinia";
import { useCountDown } from "@vant/use";

export const usePluginStore = defineStore("plugin", {
    state: () => {
        return {
            countDown: null,
            translateTimes: 0,
        };
    },
    getters: {
        //  目前秒数
        current: (state) =>
            state.countDown ? state.countDown.current.seconds : 0,
    },
    actions: {
        //   init
        startCountDown() {
            this.countDown = useCountDown({
                time: 60000,
                onFinish: this.onCountDownFinish,
                millisecond: true,
            });
            this.countDown.start();
        },
        // 执行完毕的回调
        onCountDownFinish(cb) {
            //   cb && typeof cb === "function" && cb();
            this.countDown = null;
        },
        setTimes() {
            this.translateTimes++;
        },
        reset() {
            this.$reset();
        },
    },
});
