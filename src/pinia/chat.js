/*
 * @Date: 2022-02-24
 * @Description:
 */
import { defineStore } from "pinia";
import { _user } from "@/api";

export const useChatStore = defineStore("chat", {
    state: () => ({
        chatList: [],
        curShopKey: undefined,
    }),
    getters: {
        curChat: (state) => {
            if (state.curShopKey) {
                return state.chatList.find(
                    (chat) => chat.shopKey === state.curShopKey
                );
            }
        },
        showList: (state) => state.curShopKey === undefined,
    },
    actions: {
        async loadChatList() {
            const { result } = await _user.queryMessageList();

            this.chatList = result;
        },
        loadChatCurShopKey(key) {
            this.curShopKey = key;
        },
        resetCurShopKey() {
            this.curShopKey = undefined;
        },
        pushFakeChat(key, newChat) {
            this.curShopKey = key;
            this.chatList.push(newChat);
        },
    },
});
