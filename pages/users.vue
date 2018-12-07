<template>
  <div>
    <h1>我是父级页面</h1>
    <h2>users</h2>
    <!-- <nuxt-link to="/user/child">跳转到子页面</nuxt-link> -->
    <nuxt-child
      keep-alive
      :test="123"
    ></nuxt-child>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
