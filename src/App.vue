<template>
  <div>

    <router-view></router-view>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import router from './router/index.js'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500 ? true : false)
    console.log('app.vue中menuVisible的值是' + menuVisible.value)
    provide('menuVisible', menuVisible)
    router.afterEach(() => {
      if (width <= 500) { menuVisible.value = false; }
    })

  }
}
</script>

<style scoped></style>
