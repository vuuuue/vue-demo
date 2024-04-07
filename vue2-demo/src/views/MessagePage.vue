<template>
  <div class="message-page">
    <div class="taps-box">
      <div class="btn" :class="activeIndex === 0 ? 'active' : ''" @click="changeActive(0)">全部</div>
      <div class="btn" :class="activeIndex === 1 ? 'active' : ''" @click="changeActive(1)">精华</div>
    </div>
    <div class="message-box">
      <div v-for="(item, index) in messageList.filter(_item => activeIndex === 0 || _item.start)" :key="index" class="message-item"
        @click="messageAddHandle(item)">
        <span>{{ item.title }}</span>
        <span>{{ item.time }}
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
export default {
  name: "MessagePage",
  data(){
    return {
      activeIndex: 0
    }
  },
  computed: {
    ...mapState(['messageList'])
  },
  methods:{
    changeActive(index){
      this.activeIndex = index
    },
    messageAddHandle(item){
      this.$router.push({
        path: '/message-add',
        query: {
          content: item.content,
          title: item.title
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.message-page{
  padding: 0 12px;
}
.message-item{
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .taps-box{
    display: flex;
    width: 180px;
    justify-content: flex-start;
    .btn{
      width: 600%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin-right: 12px;
      margin-top: 12px;
      margin-bottom: 12px;
      background-color: #fff;
      color: #000;
    }
    .active{
      background-color: #5584ff;
      color: #fff;
    }
  }
</style>
