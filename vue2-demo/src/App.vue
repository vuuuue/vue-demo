<template>
  <div id="app" class="page-box">
    <HeaderBox class="header">CSCS</HeaderBox>
    <router-view class="content" />
    <FooterBox class="footer">footer</FooterBox>
  </div>
</template>
<script>
import HeaderBox from '@/components/HeaderBox.vue'
import FooterBox from "@/components/FooterBox.vue"
export default{
  components: {
    HeaderBox,
    FooterBox
  }
}
</script>
<style lang="less">
html,body{
  height: 100%;
}
#app {
  height: 100%;
}

.page-box{
  display: flex;
  flex-direction: column;
  .header{
    height: 10%;
  }
  .content{
    flex: 1;
  }
  .footer{
    height: 10%;
  }
}
</style>
