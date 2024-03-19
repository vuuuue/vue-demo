<template>
 <div class="header-box">
  <div class="logo">
    <img src="../assets/logo.png" alt="logo">
    <span>前端学习</span>
  </div>
  <div class="login" @click="$router.push('/My')">
    <span v-show="!login">请登录</span>
    <span v-show="login">{{login}}</span>
  </div>
 </div>
</template>

<script>
export default {
  name: "HeaderBox",
  props: {
    msg: String,
  },
  computed:{
    login(){
      return this.$store.state.userName
    }
  },
  watch:{
  }
};
</script>

<style scoped>
.header-box{
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  .logo{
    display: FLEX;
    align-items: center;
    span{
      margin-left: 6px;
    }
  }
  img{
    width: 40px;
    border-radius: 50%;
  }
  
}
</style>
