<template>
 <div class="header-box">
  <div class="logo">
    <img src="../assets/logo.png" alt="logo">
    <span>前端学习</span>
  </div>
  <div class="login">
    <span>请登录</span>
  </div>
 </div>
</template>

<script>
export default {
  name: "HeaderBox",
  props: {
    msg: String,
  },
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
