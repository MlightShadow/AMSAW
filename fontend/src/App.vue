<template>
  <div id="app">
    <van-nav-bar
      v-if="isBack"
      left-text="返回"
      left-arrow
      :border="false"
      fixed
      :z-index="999"
      @click-left="onClickLeft"
    >
      <van-icon name="home-o" slot="right" size="30px" @click="backHome()"></van-icon>
    </van-nav-bar>
    <van-tabbar v-model="active" :fixed="true">
      <van-tabbar-item icon="home-o" to="/index" name="index">站点首页</van-tabbar-item>
      <van-tabbar-item icon="location-o" to="/register" name="register">账号注册</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/tools" name="tools">自助工具</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine" name="mine">账户管理</van-tabbar-item>
    </van-tabbar>
    <div class="app-content" :class="{'active':isBack}">
      <keep-alive v-if="this.$route.meta.keepAlive">
        <router-view v-if="this.$route.meta !== undefined && this.$route.meta.keepAlive"></router-view>
        <!--这里是会被缓存的组件-->
      </keep-alive>
      <div v-else>
        <router-view v-if="isAlive"></router-view>
      </div>
      <!--这里是不会被缓存的组件-->
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      active: "",
      isAlive: true,
      isBack: false,
      title: "",
    };
  },
  methods: {
    reload() {
      this.isAlive = false;
      this.$nextTick(function () {
        this.isAlive = true;
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    backHome() {
      window.location.href = "/loginQyh";
    },
  },
  watch: {
    $route: function (to) {
      to.meta.noBack ? (this.isBack = false) : (this.isBack = true);
      this.active = to.name;
      // this.title = to.meta.title || '标题'
    },
  },
};
</script>

<style lang="less">
@import "./assets/css/base.less";
body {
  background: #f6f5ef;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .van-nav-bar {
    height: 44px;
    line-height: 44px;
    background: #abbd99;
    color: #fff;

    .van-icon {
      color: #fff;
      font-size: 16px;
    }

    .van-nav-bar__text {
      color: #fff;
      font-size: 16px;

      &:hover {
        background: #abbd99;
        color: #fff;
      }
    }

    .van-nav-bar__left {
      left: 14px;
      font-size: 16px;
    }

    .van-nav-bar__title {
      font-size: 16px;
      color: #fff;
    }
  }

  .app-content {
    min-height: 100vh;

    &.active {
      padding-top: 44px;
      box-sizing: border-box;
    }
  }
}
</style>
