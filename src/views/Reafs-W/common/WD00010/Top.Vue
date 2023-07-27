<template>
  <div class="home-container">
    <span>Welcome {{ name }}</span>
    <product-brief-card></product-brief-card>
  </div>
</template>
<script lang="ts">
import ProductBriefCard from "@/components/basic/Product/ProductBriefCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    ProductBriefCard,
  },
  data() {
    return {
      name: "Tanaka",
    };
  },
  mounted() {},
});
</script>

<style scoped>
</style>

<style lang="less" scoped>
</style>import ProductBriefCardVue from "../../../../components/basic/Product/ProductBriefCard.vue"
