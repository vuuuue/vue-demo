<template>
  <div class="my-box">
    <div class="login-box" v-show="!login">
      <el-input
        v-model="name"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
      />
      <el-input
        v-model="password"
        placeholder="请输入密码"
      />
      <el-button type="primary" @click="loginHandle">登录</el-button>
    </div>
    <div v-show="login">
      <div>用户名：</div>
      {{ $store.state.userName }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyPage",
  data(){
    return {
      login: false,
      name: '',
      password: ''
    }
  },
  created(){
    if (!this.$store.state.userName){
      this.login = false
    } else {
      this.login = true
    }
  },
  methods:{
    loginHandle(){
      console.log(this.name, this.password)
      if (this.name === '张三' && this.password === '123456'){
        console.log('ok')
        this.$store.state.userName = '张三'
        this.login = true
      }
    }
  }

};
</script>
<style lang="less" scoped>
.my-box{
  position: relative;
}
.login-box {
  width: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
