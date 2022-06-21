/*
 * @Author: 陈哲
 * @Date: 2022-06-21
 * @LastEditors: cz
 * @Description: 
 */
// import heroImage from '@/assets/common/hero.ong'
const heroImage = import.meta.globEager("../../assets/common/hero.png")
const heroDarkImage = import.meta.globEager("../../assets/common/hero-dark.png")
const BottomImage = import.meta.globEager("../../assets/common/bottom.png")
const contentBackgroundImage = import.meta.globEager("../../assets/common/log-content-background.png")
export default{
    heroImage:Object.values(heroImage)[0].default,
    heroDarkImage:Object.values(heroDarkImage)[0].default,
}