<template>
  <div class="flex">
    <div class="ajxh9M">
      {{ resR.quantity }}
    </div>
    <div class="flex">
      <div>
        <reafs-input-quantity></reafs-input-quantity>
      </div>
      <div>{{ resR.productAvailable }}</div>
    </div>
  </div>
</template>
  <script lang="ts">
import ReafsInputQuantity from "@/components/basic/ReafsControl/ReafsInputQuantity.vue";
import resourceString from "@/static/string";
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  components: {
    ReafsInputQuantity,
  },
  data() {
    return {
      resR: resourceString,
    };
  },
  mounted() {},
});
</script>