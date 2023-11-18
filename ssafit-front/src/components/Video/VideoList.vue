<template>
  <div>
    <h2>영상 목록</h2>
    <ul>
      <VideoListItem
        class="youtubeList"
        v-for="video in youtubeList"
        :key="video.video_id"
        :video="video"
      />
    </ul>
  </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/videoStore";
import VideoListItem from "./VideoListItem.vue";
import { onMounted, computed } from "vue";

const store = useVideoStore();
const youtubeList = computed(() => store.videoList);

onMounted(() => {
  store.getVideoList();
});
</script>

<style scoped>
h2 {
  padding: 50px;
  padding-bottom: 20px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}
</style>
