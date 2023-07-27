<template>
  <div class="nk20eP shopee-input-quantity">
    <button class="qXyKaf" value="－" @click="decrement()">－</button>
    <input
      class="qXyKaf MBfLRp"
      type="text"
      role="spinbutton"
      spellcheck="false"
      data-ms-editor="true"
      :value="quantity"
    />
    <button class="qXyKaf" value="＋" @click="increment()">＋</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  data() {
    return {
      quantity: 1,
    };
  },
  mounted() {},
  methods: {
    decrement: function () {
      this.quantity -= 1;
    },
    increment: function () {
      this.quantity += 1;
    },
  },
});
</script>