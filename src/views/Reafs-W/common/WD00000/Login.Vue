<template>
  <div :class="['main-theme-' + theme]">
    <header>      
    </header>
    <section>
      <span>Login</span>
    </section>
    <footer>      
    </footer>    
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
   data() {
    return {
      theme: 'green',
    }
  },
  mounted() {    
  }
})
</script>

<style scoped>

</style>

<style lang="less" scoped>

</style>
