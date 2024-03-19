<template>
  <div class="home">
    <div>
      <el-input v-model="search" placeholder="请输入内容"></el-input>
    </div>
    <div class="banner-box">
      <img :src="banner" alt="">
    </div>
    <div class="course-list">
      <div v-for="(item, index) in coursetList" :key="index">
        <img :src="item.imgSrc" alt="">
      </div>
    </div>
    <div class="hot-list">
      <div class="title">
        热门课程
      </div>
        <CouresList/>
    </div>
  </div>
</template>

<script>
import banner from '@/assets/banner.png'
import h5 from '@/assets/h5.png'
import js from '@/assets/js.png'
import java from '@/assets/java.png'
import more from '@/assets/more.png'
import python from '@/assets/python.png'
import vue from '@/assets/vue.png'
import CouresList  from '@/components/CouresList.vue'
export default {
  name: "HomePage",
  components: {
    CouresList
  },
  data(){
    return {
      search: '',
      banner,
      coursetList:[{
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
      },
      {
        title:'more',
        imgSrc:more
      },]
    }
  },
  watch:{
    search(){
      if (!this.search) {
        this.coursetList = [{
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
      },
      {
        title:'more',
        imgSrc:more
      }]
      }
      this.coursetList = this.coursetList.filter(item => {
        return item.title.indexOf(this.search) !== -1
      })
    }
  }
};
</script>
<style lang="less">
.home{
  overflow: auto;
  .banner-box{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .course-list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    div{
      width: 20%;
      padding: 0 4%;
    }
    img{
      width: 100%;
    }
  }
}
</style>
<style lang="less" scoped>
.hot-list{
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title{
    font-size: 18px;
  }
  
}
</style>
