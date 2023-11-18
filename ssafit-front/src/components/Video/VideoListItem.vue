<template>
  <li>
    <iframe
      width="400"
      height="225"
      :src="video.youtube"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <h6>
      <router-link id="title" :to="`/board/${props.video.video_id}`">{{
        video.title
      }}</router-link>
    </h6>
  </li>
</template>

<script setup>
import BoardList from "../Board/BoardList.vue";

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

#title {
  display: block;
  text-decoration-line: none;
  color: black;
  word-wrap: break-word;
  width: 400px;
  padding-top: 10px;
  line-height: 24px;
}
</style>
