<template>
  <div :class="['main-theme-' + theme]">
    <header>
      <HelloWorld msg="You did it!" />
      <TheWelcome />      
    </header>
    <nav>      
    </nav>
    <section>
      <router-view />     
    </section>
    <aside>      
    </aside>
    <footer>      
    </footer>    
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import uiConfig from '@/static/ui-config'

// export interface Props {
//   theme: string
//   count?: number
// }
// const props = withDefaults(defineProps<Props>(),
// {
//   theme: uiConfig.theme,
//   count: 0
// })
const theme: String = uiConfig.theme
</script>

<style scoped>

</style>

<style lang="less" scoped>

</style>
