<template>
 <div class="footer-box">
  <div v-for="(item, index) in list" :key="index" @click="jumpHandle(item)">
    <div class="icon-box"><i :class="item.icon" ></i></div>
    <div>{{ item.name }}</div>
  </div>
 </div>
</template>

<script>

export default {
  name: "FooterBox",
  props: {
    msg: String,
  },
  data(){
    return {
      list:[
        {
          routeName: 'Home',
          path: '/home',
          name: '首页',
          icon: 'el-icon-house'
        },
        {
          routeName: 'Message',
          path: '/message',
          name: '留言',
          icon: 'el-icon-message'
        },
        {
          routeName: 'Course',
          path: '/course',
          name: '课程',
          icon: 'el-icon-notebook-1'
        },
        {
          routeName: 'My',
          path: '/my',
          name: '我的',
          icon: 'el-icon-user'
        }
      ]
    }
  },
  methods: {
    jumpHandle(item) {
      if (this.$route.name !== item.routeName) {
        this.$router.push({name: item.routeName});
      }
    }
  }
};
</script>

<style scoped>
.footer-box {
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon-box{
    font-size: 24px;
    text-align: center;
  }
}
</style>
