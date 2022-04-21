<template>
  <HelloComp />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      const $echo =
        getCurrentInstance()?.appContext.config.globalProperties.$echo
      $echo()
    })
  }
})
</script>

<style lang="scss"></style>
