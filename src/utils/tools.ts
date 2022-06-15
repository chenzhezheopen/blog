import { useAppStore } from "@/pinia/app"
import {storeToRefs } from 'pinia'

export const getPageTitle = (title:string) => {
    const { pageTitle } = storeToRefs(useAppStore())
    return pageTitle?`${pageTitle.value}-${title}`:title
}