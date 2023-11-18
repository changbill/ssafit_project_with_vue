<template>
  <div>
    <h4>{{ part }}</h4>
    <ul>
      <!-- id 향후 바꿀것 -->
      <VideoListItem
        v-for="video in part2List"
        :key="video.video_id"
        :video="video"
      />
    </ul>
  </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/videoStore";
import VideoListItem from "./VideoListItem.vue";
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
const store = useVideoStore();
const part = "상체";

const part2List = computed(() => {
  return store.videoList.filter((video) => video.fit_path_name === part);
});

onMounted(() => {
  store.getVideoList();
});
</script>

<style scoped>
h4 {
  padding-left: 50px;
  padding-top: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}
</style>
