<template>
  <button
    :class="[
      'product-variation' + (selected ? ' product-variation--selected' : ''),
    ]"
    :aria-label="variation"
    aria-disabled="false"
    @click="tongleClick()"
  >
    {{ variation }}
    <div v-if="selected" class="product-variation__tick">Ⅴ</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    variation: {
      type: String,
      default: "",
    },
    select: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selected: false,
    };
  },
  mounted() {
    this.selected = this.select
  },
  methods: {
    tongleClick: function () {
      this.selected = !this.selected;
      this.$emit('tongleSelect', this.selected, this.index )
    },
  },
});
</script>