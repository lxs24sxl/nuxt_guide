<template>
  <div class="posts-wrapper">
    <h1>{{asyncData.title}}</h1> 
    <h2>{{asyncData.desc}}</h2> 
    <h3>{{data.title}}</h3>
    <h3>{{data.desc}}</h3>
    {{name}}
    <img src="~assets/failed.jpg" alt="failed">
  </div>
</template>

<script>
import { mapState  } from 'vuex'
export default {
  layout: 'blog',
  // async asyncData ({ params }) {
  //   let res = await axios.get(`http://localhost:9000/api`)
  //   return {
  //     asyncData: res.data.data
  //   }
  // },
  fetch ({store, params}) {
  },
  asyncData ({ app, error }) {
    // return app.$axios.$get(`http://localhost:9000/api`)
    //   .then(res => {
    //     return { asyncData: res.data }
    //   })
      // .catch(err => {
      //   error({ statusCode: 404, message: 'post not found'})
      // })
  },
  data () {
    return {
      asyncData: {
        title: 'testTitle',
        desc: 'test'
      },
      data: {
        title: 'dsada',
        desc: 'dasdasdas'
      },
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  mounted() {
    console.log('this.$store', this.$store)
  }
}
</script>

<style lang="less" scoped>
.posts-wrapper {
  h3 {
    color: blue;
  }
}
</style>