<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt_guide
      </h1>
      <h2 class="subtitle">
        My top-notch Nuxt.js project test
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
        {{name}}
        <i class="fa fa-wheelchair" aria-hidden="true"></i>
        <el-button type="primary" @click="login">Login</el-button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  notifications: {
    showLoginError: {
      // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  },
  asyncData(ctx) {
    return {
      name: ctx.store.state.name,
    }
    // ctx.redirect({path: '/posts'})
  },
  methods: {
    login() {
      this.$message({ message: "登录成功", type: 'success' })
      this.showLoginError()
    }
  },
  mounted() {
    this.$myInjectedFunction('test')
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
