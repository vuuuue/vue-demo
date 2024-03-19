<template>
  <div class="home">
    <CouresList></CouresList>
  </div>
</template>

<script>
// @ is an alias to /src
import CouresList  from '@/components/CouresList.vue'

export default {
  name: "CoursePage",
  components: {
    CouresList
  },
  data(){
    return {
    }
  }
};
</script>
