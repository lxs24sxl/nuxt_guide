<template>
  <div>
    _id
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // 必须是Number类型
    // return /^\d+$/.test(params.id)
    return false
  }
}
</script>
