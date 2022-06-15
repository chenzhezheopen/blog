/*
 * @Date: 2022-02-21
 * @Description:web_index
 */
import { defineStore } from "pinia";
import { _shopCart } from "@/api/index";

export const useWebIndexStore = defineStore("web_index", {
    state: () => ({
        cartNum: 0,
        template: 0, // 模板id
        slogan: "", // slogan,
        app: {},   // 初始化数据
        userMsg: {},    // 用户基本信息
        order: {
            note: "",
            orderNo: "", // 订单编号
            cartList: [], // 商品列表
            shippingPrice: 0, // 邮费
            taxes: 0, // 税费
            index: "", // 所在位置的名字
            //当前下标
            nowStep: 2,
            //最后一步下标
            step: 2, // 所在位置的下标
            information: {},
            billingAddress: {}, // 账单地址
            billingAddressIndex: 1,
            logistics: {}, // 运输规则
            isKeep: false,
            isSave: false,
            isAlterPrice: false, // 是否为一口价
            totalAmt: 0, // 订单总价
            discount: 0, // 折扣金额
        },
        navbarSearch: {
            name: "",
            seriesId: null,
            keys: false,
        },
        real: true,
        local: window.location.href,
        systemColor: null,
    }),
    actions: {
        async getCartNumber() {
            const res = await _shopCart.getCartNum();
            this.cartNum = res.result;
        },
        resetOrder() {
            Object.assign(this.order,{
                note: "",
                orderNo: "",
                cartList: [],
                shippingPrice: 0, // 邮费
                taxes: 0, // 税费
                index: "", // 所在位置的名字
                //当前下标
                nowStep: 2,
                //最后一步下标
                step: 2, // 所在位置的下标
                information: {},
                billingAddress: {},
                billingAddressIndex: 1,
                logistics: {},
                isSave: false,
                email: "",
            })
        },
        cartNum(num) {
            this.cartNum = num;
        },
        setOrder(data) {
            this.order[data[0]] = data[1];
        },
        orderInit() {
            this.order = {
                note: "",
                orderNo: "",
                cartList: [],
                shippingPrice: 0, // 邮费
                taxes: 0, // 税费
                index: "MemberAddress", // 所在位置的名字
                step: 2, // 所在位置的下标
                information: {},
                logistics: {},
                isSave: false,
            };
        },
    },
    persist: {
        storage: window.sessionStorage,
    }
});
