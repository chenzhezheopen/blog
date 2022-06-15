/*
 * @Date: 2021-12-03
 * @Description:
 */

// =>引入路由
import router from "@/router";
// =>引入获取页面标题函数
import { getPageTitle } from "@/utils/tools";
// =>滑动
import { scrollTo } from "@/utils/scroll-to.js";

router.beforeEach(async (to: any, from: any, next) => {
  // if(to.meta.permissions && to.meta.permissions.includes('U_3')){
  //   store.commit(ADD_APP_PATH_RECORD,to.href)
  // }
  
  // //已登录且用户不能访问的页面
  // if(to.meta.permissions && !to.meta.permissions.includes('U_2') && store.state.account.userInfo.token){
  //   next('/');
  // }

  // //未登陆游客不能访问的页面跳转登陆页
  // if (to.meta.permissions && !to.meta.permissions.includes('U_1') && !store.state.account.userInfo.token) {
  //   next('/account/login');
  // }
  //正常访问
  next()
});

router.afterEach(async (to: any, from: any, next) => {
  // set page title
  document.title = to.meta.title && getPageTitle(to.meta.title);
 scrollTo(0, 0)

})