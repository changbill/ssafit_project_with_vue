import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "@/util/http-common";

const API_URL = `/api-board/board`;

export const useBoardStore = defineStore("board", () => {
  // 리뷰 목록
  const boardList = ref([]);
  const getBoardList = function (video_id) {
    axios.get(`${API_URL}/${video_id}`).then((response) => {
      boardList.value = response.data;
    });
  };

  // 리뷰 상세보기
  const board = ref({});
  const getBoard = function (video_id, id) {
    axios.get(`${API_URL}/${video_id}/${id}`).then((response) => {
      console.log(response.data);
      board.value = response.data;
    });
  };

  // 리뷰 삭제
  const deleteBoard = function (video_id, id) {
    axios
      .delete(`${API_URL}/${video_id}/${id}`)
      .then(router.push({ name: "boardList" }))
      .catch((err) => {
        console.log(err);
      });
  };

  // 리뷰 등록
  const createBoard = function (board) {
    axios({
      url: API_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: board,
    })
      .then(() => {
        router.push({ name: "boardList" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 리뷰 수정
  const updateBoard = function () {
    axios.put(`${API_URL}/`, board.value).then(() => {
      router.push({ name: "boardList" });
    });
  };

  return {
    deleteBoard,
    getBoard,
    getBoardList,
    board,
    boardList,
    createBoard,
    updateBoard,
  };
});
