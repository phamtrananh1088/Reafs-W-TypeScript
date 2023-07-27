<template>
  <div style="height:100%;">
    <redirect-error :text="text" :errorNumber="errorNumber"></redirect-error>
  </div>
</template>
<script lang="ts">
import RedirectError from '@/components/basic/RedirectError.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    RedirectError
  },
  data () {
    return {
      errorNumber: '404',
      text: '申し訳ございません。この画面は存在しません。'
    }
  }
})
</script>