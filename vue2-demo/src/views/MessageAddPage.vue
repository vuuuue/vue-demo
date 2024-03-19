<template>
  <div class="message-add-page">
    <div class="message-item">
     <div class="title">{{ title }}</div> 
     <div>{{ message }}</div> 
    </div>
    <div class="add-box">
      <el-input
        v-model="content"
        placeholder="我要回答"
        type="textarea"
        :rows="2"
      />
      <el-button class="btn" type="primary" @click="addHandle">提交</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs';
export default {
  name: "MessageAddPage",
  data(){
    return {
      message: '',
      title: '',
      content: ''
    }
  },
  created(){
    this.message = this.$route.query.content
    this.title = this.$route.query.title
  },
  methods:{
    addHandle(){
      this.$store.state.messageList.push(
        {
        id: 1,
        title: this.title,
        content: this.content,
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        start: false
      })
      window.history.back()
    }
  }
};
</script>
<style lang="less" scoped>
.message-add-page{
  padding: 12px;
}
.message-item{
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 12px;
    .title{
      font-size: 18px;
      font-weight: 700;
      color: #5584ff;
    }
  }
  .add-box{
    display: flex;
    flex-direction: column;
    .btn{
      margin-top: 40px;
    }
  }
</style>
