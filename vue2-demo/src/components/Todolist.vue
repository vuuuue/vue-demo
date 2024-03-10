<template>
  <div>
    <div @click="add">+</div>
    <div v-for="(item, index) in value" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    value: Array,
  },
  methods:{
    add(){
      const arr = JSON.parse(JSON.stringify(this.value))
      arr.push({name: 'cs' + new Date()})
      this.$emit('input', arr)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
