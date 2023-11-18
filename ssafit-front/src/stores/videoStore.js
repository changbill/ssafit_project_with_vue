import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "@/util/http-common";

const VIDEO_API = "/api-video";

export const useVideoStore = defineStore("video", () => {
  // 내림차순 정렬된 videoList
  const videoList = ref([]);
  const getVideoList = function () {
    axios.get(`${VIDEO_API}/count`).then((response) => {
      videoList.value = response.data;
    });
  };

  // 부위별 영상 목록
  const partList = ref([]);
  const partVideo = function (part) {
    // 파라미터로 부위를 넘길 예정
    axios.get(`${VIDEO_API}/${part}`).then((response) => {
      console.log(response.data);
      partList.value = response.data;
    });
  };

  const selectedVideo = ref(null);

  const clickVideo = function (video) {
    selectedVideo.value = video;
  };

  return {
    partVideo,
    getVideoList,
    clickVideo,
    videoList,
    partList,
    selectedVideo,
  };
});
