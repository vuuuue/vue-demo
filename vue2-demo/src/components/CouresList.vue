<template>
  <div>
  <div class="hot-card" v-for="(item, index) in hotList" :key="index">
    <div>
      <img :src="item.imgSrc" alt="">
    </div>
    <div>
      {{ item.title }}
    </div>
  </div>
</div>
</template>

<script>
import h5 from '@/assets/h5.png'
import js from '@/assets/js.png'
import java from '@/assets/java.png'
import python from '@/assets/python.png'
import vue from '@/assets/vue.png'
export default {
  name: "CouresList",
  props: {
    msg: String,
  },
  data() {
    return {
      hotList:[{
        title:'h5开发',
        imgSrc:h5
      },
      {
        title:'js开发',
        imgSrc:js
      },
      {
        title:'java开发',
        imgSrc:java
      },
      {
        title:'python开发',
        imgSrc:python
      },
      {
        title:'vue开发',
        imgSrc:vue
      }]
    }
  },
  methods: {
    jumpHandle(item) {
      if (this.$route.name !== item.routeName) {
        this.$router.push({ name: item.routeName });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hot-card{
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    div{
      img{
        width: 40px;
      }
    }
  }
</style>
