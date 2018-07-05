<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
import showBlogs from './components/showBlogs.vue'

export default {
components: {
  'show-blogs':showBlogs
},
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
#single-blog {
    margin: 30px auto;
    max-width: 640px;  
    padding: 15px;
    background-color: #cccccc;
}
h4 {
  color:#222;
  font-weight: bold;
  font-size: 18px;
}
</style>
