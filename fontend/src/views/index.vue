<template>
  <div>
    <van-swipe :autoplay="5000" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img lazy-load :src="image" width="100%" height="200px" fit="none" />
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      left-icon="volume-o"
      text="本服为[Trinity Core]公益测试服务器, 测试结果会反映到TC官方以便对程序进行修改, 禁止任何以本服进行牟利行为, 一旦发现永久撤销其测试资格, 当前服务器状态还未稳定, 请勿频繁登录"
    />
    <van-grid :column-num="1" gutter="2px" >
      <van-grid-item >开发中...</van-grid-item>
      <van-grid-item ></van-grid-item>
      <van-grid-item ></van-grid-item>
      <van-grid-item ></van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      personId: 0,
      companyId: 0,
      personNo: "10432716",
      companyNo: "A001",
      images: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2927332065,2703426796&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598697521872&di=173d59e7701227e632e21d35c6fb55bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Feeb829d0af1c1bb2244c7846a016435d2cf43a59.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598698227152&di=847f50455120cf21484d3ac5e539c546&imgtype=0&src=http%3A%2F%2Fimg0.178.com%2Fwow%2F201908%2F360872728578%2F360873049430.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598697521870&di=3553c054736d9caa4e88b3eafa07a209&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fgame%2Fwow%2Fnews%2F201610%2F1021%2F1%2F11.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598698431740&di=b32b595cce0a3955a58ef3a0009dd409&imgtype=0&src=http%3A%2F%2Fwww.vrmeigu.com%2Fuploads%2Fallimg%2F200317%2F14035355U_0.png%3FimageView%26thumbnail%3D550x0",
      ],
    };
  },
  methods: {
    getUserInfo() {
      this.api
        .getUserInfo({
          PersonNo: this.personNo,
          CompanyNo: this.companyNo,
        })
        .then((res) => {
          if (res.StatusCode === 200 && res.IsSuccess === true) {
            this.$store.dispatch("signIn", res.Data);
            this.personId = this.$store.getters.loginData.PersonId;
            this.companyId = this.$store.getters.loginData.CompanyId;
          } else {
            this.$toast.fail(res.ErrorMessage);
          }
        });
    },
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  font-size: 20px;
  text-align: center;
}
</style>