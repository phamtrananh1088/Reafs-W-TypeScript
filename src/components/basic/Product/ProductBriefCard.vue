<template>
  <div class="product-brief card">
    <div class="flex">
      <div class="flex flex-column">
        <product-property-variation-select></product-property-variation-select>
        <product-property-quantity></product-property-quantity>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ProductPropertyQuantity from "@/components/basic/Product/Property/ProductPropertyQuantity.vue";
import ProductPropertyVariationSelect from "@/components/basic/Product/Property/ProductPropertyVariationSelect.vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  components: {
    ProductPropertyQuantity,
    ProductPropertyVariationSelect
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>