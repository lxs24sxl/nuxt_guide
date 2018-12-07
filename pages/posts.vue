<template>
  <div class="posts-wrapper">
    <h1>{{asyncData.title}}</h1>
    <h2>{{asyncData.desc}}</h2>
    <h3>{{data.title}}</h3>
    <h3>{{data.desc}}</h3>
    {{name}}
    -
    {{result}}
    <el-button @click="test">测试</el-button>
    <img
      src="~assets/failed.jpg"
      alt="failed"
    >
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  // layout: 'blog',
  layout(context) {
    return 'blog'
  },
  // 抛出错误
  // validate ({params, query, store}) {
  //   throw new Error("Under Construction!")
  // },
  // async asyncData ({ params }) {
  //   let res = await axios.get(`http://localhost:9000/api`)
  //   return {
  //     asyncData: res.data.data
  //   }
  // },
  async fetch({ store, params }) {
    // await store.dispatch("user/GET_RESULT")
    // store.commit('user/SET_RESULT', '测试lxs')
    // store.dispatch("user/GET_RESULT")
    // this.getResult()
  },
  asyncData({ app, error }) {
    // return app.$axios.$get(`http://localhost:9000/api`)
    //   .then(res => {
    //     return { asyncData: res.data }
    //   })
    // .catch(err => {
    //   error({ statusCode: 404, message: 'post not found'})
    // })
  },
  data() {
    return {
      asyncData: {
        title: 'testTitle',
        desc: 'test'
      },
      data: {
        title: 'dsada',
        desc: 'dasdasdas'
      }
    }
  },
  computed: {
    result() {
      return this.$store.state.user.result
    },
    ...mapState(['name'])
  },
  mounted() {
    // this.$store.commit('user/SET_RESULT', '测试测试')
    // console.log('setResult', setResult)
  },
  methods: {
    ...mapMutations({
      setResult: 'user/SET_RESULT'
    }),
    ...mapActions({
      getResult: 'user/GET_RESULT'
    }),
    test() {
      this.setResult('dasdasd')
      // this.$store.dispatch("user/GET_RESULT")
      // this.getResult()
      // console.log('this.$store', this.$store)
      // this.$store.commit('user/SET_RESULT', '测试测试')
    }
  }
}
</script>

<style lang="less" scoped>
.posts-wrapper {
  h3 {
    color: blue;
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>