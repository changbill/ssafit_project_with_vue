<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5>리뷰 상세</h5>
    <hr />
    <table class="table table-hover inter">
      <tr>
        <td class="fw-bold">제목</td>
        <td>{{ store.board.title }}</td>
      </tr>
      <tr>
        <td class="fw-bold">작성자</td>
        <td>{{ store.board.writer }}</td>
      </tr>
      <tr>
        <td class="fw-bold">내용</td>
        <td>{{ store.board.content }}</td>
      </tr>
      <tr>
        <td class="fw-bold">조회수</td>
        <td>{{ store.board.view_cnt }}</td>
      </tr>
      <tr>
        <td class="fw-bold">작성일</td>
        <td>{{ store.board.regDate }}</td>
      </tr>
    </table>
    <button
      type="button"
      class="btn btn-outline-secondary"
      @click="updateBoard"
    >
      수정
    </button>
    <button type="button" class="btn btn-outline-danger" @click="deleteBoard">
      삭제
    </button>
    <button type="button" class="btn btn-outline-primary" @click="moveList">
      목록
    </button>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/boardStore";
import axios from "@/util/http-common";

const store = useBoardStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(route.params.video_id, route.params.id);
  store.getBoard(route.params.video_id, route.params.id);
});

const deleteBoard = function () {
  axios
    .delete(`/api-board/board/${route.params.video_id}/${route.params.id}`)
    .then(() => {
      alert("정말 삭제하시겠습니까?");
    })
    .then(() => {
      router.push({ name: "boardList" });
    });
};

const updateBoard = function () {
  router.push({ name: "boardUpdate" });
};

const moveList = function () {
  router.push({ name: "boardList" });
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 15px;
  max-width: 900px;
  margin-top: 30px;
  border: 1px solid lightgray;
  /* text-align: center; */
}

h5 {
  font-weight: bold;
  padding-top: 10px;
}

.inter {
  border-collapse: separate;
  border-spacing: 5px;
}

button {
  margin: 3px;
}
</style>
