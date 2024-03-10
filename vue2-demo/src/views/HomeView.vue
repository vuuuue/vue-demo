<template>
  <div class="home">
    <Todolist v-model="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todolist from "@/components/Todolist.vue";

export default {
  name: "HomeView",
  components: {
    Todolist
  },
  data(){
    return {
      list: [{name: 1}, {name: 2}]
    }
  }
};
</script>
