/*
 * @Date: 2021-12-31
 * @Description:usrRootStore
 */
import { defineStore } from "pinia";
import { _product, _user } from "@/api";

export const useRootStore = defineStore("root", {
  state: () => ({
    // 菜单面板
    isMenuShow: false,
    // 价格筛选面板
    isFilterShow: false,
    // 活动logo
    isActivityShow: false,
    // 轮播列表
    bannerList: [],
    // 首页系列商品列表
    seriesList: [],
    // 系列列表
    seriesIndexList: [],
    //
    tabbarList: [],
    // 首页系列导航列表数据(二维数组)
    categoriesList: [],
    // 全局Loading
    isGlobalLoading: false,
    // 搜索框内容
    searchValue: "",
    //前四项顺序
    frontList: [],
    //后几项顺序
    backList: [],
  }),
  actions: {
    //   切换价格筛选面板
    toggleFilterPop(payload) {
      this.isFilterShow = payload;
    },
    //   切换左侧菜单面板
    toggleMenuPop(payload) {
      this.isMenuShow = payload;
    },
    // 更新首页 视频播放控制
    SET_SCORE_OPERATIONID({ seriesId, productId, type = "series" }) {
      if (type === "series") {
        const series = this.seriesList.find(
          (series) => series.classifyId === seriesId
        );
        const target = series.productList.find(
          (product) => product.productId === productId
        );

        target.isView = !target.isView;
      } else if (type === "all") {
        //
        const target = this.homePageAllProducts.find(
          (product) => product.productId === productId
        );
        target.isView = !target.isView;
      }
    },
    // 首页数据
    async loadPortalMain() {
      const { result } = await _product.queryPortalProducts();
      
      if (result.advDTOS.length == 0 || result.seriesDTOS.length == 0) {
        return;
      }

      const { advDTOS: bannerList, seriesDTOS: seriesList } = result;

      const payload = [bannerList, seriesList];

      this.updatePortalMain(payload);
    },

    updatePortalMain(payload) {
      const [bannerList, seriesList] = payload;
      this.bannerList = bannerList;
      this.seriesList = seriesList;

      // 首页展示顺序
      const classifyIdList = this.seriesList
        .map(({ classifyId }) => classifyId)
        .filter((classifyId) => ![7, 8, 9].includes(classifyId));
      // 减去前四项
      const frontList = classifyIdList.slice(0, 4);
      const backList = classifyIdList.slice(4);

      this.frontList = frontList;

      // [simpleSeries1,sliderSeries1,simpleSeries2,sliderSeries2]

      const [classifyId1, classifyId2, classifyId3, classifyId4] =
        this.frontList;

      this.backList = backList;

      // 封装数组 第一组  切成4个

      // 封装数组 第二组  切成六个
      const slideSeries1 = seriesList.find(
        (series) => series.classifyId === classifyId2
      );

      slideSeries1.productList = slideSeries1.productList.slice(0, 7);

      // 封装数组 第四组  切成六个
      const slideSeries2 = seriesList.find(
        (series) => series.classifyId === classifyId4
      );

      slideSeries2.productList = slideSeries2.productList.slice(0, 7);

      // 4-13 切4 除去789
      for (let i = 0; i < this.seriesList.length; i++) {
        const series = this.seriesList[i];
        if ([7, 8, 9, classifyId2, classifyId4].includes(series.classifyId))
          continue;
        series.productList = series.productList.slice(0, 4);
      }
    },
    async loadPortalSeries() {
      const { result } = await _product.queryPortalSeries();
      console.log("=>", "系列列表", result);
      this.updatePortalSeries(result);
    },
    updatePortalSeries(payload) {
      // 菜单数组
      this.seriesIndexList = payload;

      //
      // console.log("classifyIdList=>", classifyIdList, backList, frontList);

      // 首页 导航块
      // 1.筛除并排序

      const brandList = [];

      const categoriesList = payload
        .filter((item) => {
          if ([7, 8, 9].includes(item.classifyId)) brandList.push(item);
          return item.iconSort;
        })
        .sort((a, b) => a.iconSort - b.iconSort);

      // tabbarList ...  将其中7,8,9品牌选项转成为一个单独对象
      const tempBarList = payload
        .filter(({ navigationSort }) => navigationSort)
        .sort((a, b) => a.navigationSort - b.navigationSort);

      this.tabbarList = tempBarList;

      const gennerateCategoryList = (arr) => {
        // 分割
        const len = arr.length;
        const middleIndex = Math.ceil(len / 2);
        const sourceArray = arr.splice(0, middleIndex);

        return sourceArray.map((source, index) => {
          const prev = sourceArray[index];
          const next = arr[index];
          return index < arr.length ? [prev, next] : [prev];
        });
      };
      // 2 重组成二维
      this.categoriesList = gennerateCategoryList(categoriesList);
    },
    // 切换 全局Loading 显示/隐藏
    toggleGloabalLoading(payload) {
      this.isGlobalLoading = payload;
    },
    // 切换 活动面板 显示/隐藏
    toggleActivityPop(payload) {
      this.isActivityShow = payload;
    },
    // 赋值 用户心愿单列表
    queryStarWishList(payload) {
      this.starWishList = payload;
    },
  },
   persist: {
        storage: window.sessionStorage,
    }
});
