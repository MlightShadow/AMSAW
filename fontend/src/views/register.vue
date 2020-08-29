<template>
  <div>
    <van-row>
      <van-col
        span="24"
        style="background : url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598698431740&di=b32b595cce0a3955a58ef3a0009dd409&imgtype=0&src=http%3A%2F%2Fwww.vrmeigu.com%2Fuploads%2Fallimg%2F200317%2F14035355U_0.png%3FimageView%26thumbnail%3D550x0') no-repeat; background-size: 100% 200px; height: 200px; width: 100%; color: #fff"
      >
        <h1 style="margin-top: 150px; margin-left: 15px">帐号注册</h1>
      </van-col>
    </van-row>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="测试账户名"
        placeholder="请使用数字和字母的组合..."
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="email"
        name="email"
        label="绑定邮箱"
        placeholder="请确认正确, 当前没有校验机制"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="再次确认密码"
        placeholder="请再次输入密码"
        :rules="[{ required: true, message: '请再次确认密码' }]"
      />
      <div style="margin: 15px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {form} from "vant"


export default {
  components:{
    "van-form": form,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style>
</style>