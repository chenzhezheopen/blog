/*
 * @Date: 2022-02-21
 * @Description:web_score
 */
import { defineStore } from "pinia";

export const useWebScoreStore = defineStore("web_score", {
    state: () => ({
        businessInfo: {},
        operationId: null,
        scoreNum: 0,
        product: {},
        identification: null,
        productscore: {
            avgStarLevel: 0,
            starLevel1: 0,
            star1: 0,
            starLevel2: 0,
            star2: 0,
            starLevel3: 0,
            star3: 0,
            starLevel4: 0,
            star4: 0,
            starLevel5: 0,
            star5: 0,
            commentNum: 0,
        },
        //评论类型（1：用户评论；2：游客评论 ；3：追评）
        scoreType: 1,
    }),
    actions: {
        SET_SCORE_OPERATIONID(payload) {
            this.operationId = payload;
        },
        SET_SCORE_SCORENUM(payload) {
            this.scoreNum = payload;
        },
        SET_SCORE_PRODUCT(payload) {
            this.product = payload;
        },
        SET_SCORE_IDENTIFICATION(payload) {
            this.identification = payload;
        },
        SET_SCORE_PRODUCTSCORE(payload) {
            Object.assign(this.productscore, payload);
        },
        SET_SCORE_SCORETYPE(payload) {
            this.scoreType = payload;
        },
        RESET_SCORE() {
            this.$reset();
        },
        SET_BUSINESSINFO(payload) {
            this.businessInfo = payload
        }
    },
    persist: {
        storage: window.sessionStorage,
    }
});
