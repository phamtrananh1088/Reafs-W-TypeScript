<template>
  <div class="middle-box">
    <div class="text-center animated fadeInDown">
      <h1>{{ errorNumber }}</h1>
      <h3 class="font-bold">ページは見つかりませんでした。</h3>
      <slot></slot>
      <div class="error-desc">{{ text }}</div>
      <div class="back">
        <input type="button" @click="backHome()" icon="md-arrow-round-back" value="TOPページへ戻る" />
        {{ x.toFixed(2) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';
// let x: string | number = 1
let x: number = 1
</script>
<script lang="ts">

export default defineComponent({
  props:{
    errorNumber:{
      type:String,
      default:'500'
    },
    text:{
      type:String,
      default:'エラーが出てきました。'
    }
  },
  data() {
    return {
      y: 1
    }
  },
  methods: {
    backHome: function (path: string = '/') {
      this.$router.push({
        path
      });
    }
  }
})
</script>

<style scoped>
body {
  background-color: #fff;
}
.middle-box {
  text-align: center;
  padding-top: 80px;
  height: 100%;
  h1 {
    font-size: 140px;
    font-weight: 100;
  }
  .back {
    padding: 10px;
  }
}
</style>

