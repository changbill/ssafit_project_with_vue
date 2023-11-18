<template>
  <div>
    <h2>운동 부위별 영상 목록</h2>
    <ul>
      <Wholebody />
      <hr />
      <UpperBody />
      <hr />
      <Lowerbody />
      <hr />
      <Abs />
    </ul>
  </div>
</template>

<script setup>
import Wholebody from "./wholebody.vue";
import UpperBody from "./upperBody.vue";
import Lowerbody from "./lowerbody.vue";
import Abs from "./abs.vue";
</script>

<style scoped>
h2 {
  padding: 50px;
  padding-bottom: 30px;
}
</style>
