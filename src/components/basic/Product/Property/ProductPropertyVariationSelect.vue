<template>
  <div class="flex">
    <div class="ajxh9M">
      {{ resR.color }}
    </div>
    <div class="flex">
      <reafs-button-variation-select
        v-for="(s, i) in variations"
        :key="s.val + s.select"
        :variation="s.val"
        :select="s.select"
        :index="i"
        @tongle-select="tongleGroupSelect"
      ></reafs-button-variation-select>
    </div>
  </div>
</template>
  <script lang="ts">
import ReafsButtonVariationSelect from "@/components/basic/ReafsControl/ReafsButtonVariationSelect.vue";
import resourceString from "@/static/string";
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  components: {
    ReafsButtonVariationSelect,
  },
  data() {
    return {
      resR: resourceString,
      variations: [
        { val: "**", select: false },
        { val: "* *", select: false },
        { val: "** *", select: false },
        { val: "***", select: false },
      ],
    };
  },
  mounted() {},
  methods: {
    tongleGroupSelect: function (selected: boolean, index: number) {
      if (selected) {
        //const variations: object[] = [];
        this.variations.map(({ val, _ }, i) => {
          if (i !== index) {
            this.variations[i].select = false
            //variations.push({ val, select: false });
          } else {
            this.variations[i].select = true
            //variations.push({ val, select: true });
          }
        });
        //this.variations = variations;
      }
    },
  },
});
</script>