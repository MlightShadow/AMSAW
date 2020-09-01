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
        placeholder="用户名"
        required
        :rules="[{ required: true, message: '请填写用户名' },
        {
          pattern: namePattern, message: '请使用6-16位数字和字母的组合'
        }]"
      />
      <van-field
        v-model="email"
        name="email"
        label="绑定邮箱"
        placeholder="邮箱"
        required
        :rules="[{ required: true, message: '请填写邮箱' }, {
      pattern:mailpattern, message: '这可能不是一个正确的邮箱' }]"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        label="密码"
        placeholder="密码"
        required
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="再次确认密码"
        placeholder="再次输入密码"
        required
        :rules="[{validator, message: '两次密码输入不一致' }]"
      />
      <div style="margin: 15px;">
        <van-button round block type="info" native-type="submit">立即注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      mailpattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      namePattern: /^[A-Za-z0-9]{6,16}$/,
    };
  },
  methods: {
    validator(val) {
      return this.password === val;
    },
    onSubmit() {
      this.api
        .register({
          username: this.username,
          regmail: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.code === 200) {
            this.$toast.success("注册成功");
            this.username = "";
            this.email = "";
            this.password = "";
            this.password2 = "";
          } else {
            this.$toast.fail(res.message);
          }
        });
    },
  },
};
</script>

<style>
</style>