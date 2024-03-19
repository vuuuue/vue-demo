<template>
  <div class="message-page">
    <div class="taps-box">
      <div class="btn">全部</div>
      <div class="btn">精华</div>
    </div>
    <div class="message-box">
      <div v-for="(item, index) in messageList" :key="index" class="message-item"
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

    }
  },
  computed: {
    ...mapState(['messageList'])
  },
  methods:{
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
</style>
