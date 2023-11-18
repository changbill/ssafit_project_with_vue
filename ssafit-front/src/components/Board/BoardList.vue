<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5>
      리뷰 목록 <span class="badge bg-primary">{{ reviewList.length }}</span>
    </h5>
    <hr />
    <!-- <h3 >리뷰 목록</h3> -->
    <table class="table table-hover">
      <caption style="font-size: small">
        &copy;SSAFIT PROJECT
      </caption>
      <thead>
        <tr class="table-light">
          <!-- TableHeader -->
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">조회수</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in reviewList" :key="board.id">
          <!-- TableData -->
          <td>{{ board.id }}</td>
          <td>
            <!-- 상세보기로 -->
            <RouterLink :to="`/board/${route.params.video_id}/${board.id}`">{{
              board.title
            }}</RouterLink>
          </td>
          <td>{{ board.writer }}</td>
          <td>{{ board.view_cnt }}</td>
          <td>{{ board.regDate }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-outline-primary" @click="createBoard">
      리뷰 등록
    </button>
    <button type="button" class="btn btn-outline-secondary" @click="moveList">
      영상 목록
    </button>
  </div>
</template>
<script setup>
import { onBeforeMount, computed } from "vue";
import { useBoardStore } from "@/stores/boardStore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const store = useBoardStore();
const reviewList = computed(() => store.boardList);

const createBoard = function () {
  router.push({ name: "boardCreate" });
};

const moveList = function () {
  router.push({ name: "homeview" });
};

onBeforeMount(() => {
  store.getBoardList(route.params.video_id);
});
</script>

<style scoped>
.container {
  width: 100%;
  padding: 15px;
  max-width: 900px;
  margin-top: 30px;
  border: 1px solid lightgray;
  text-align: center;
}

h5 {
  font-weight: bold;
  padding-top: 10px;
}

button {
  margin: 3px;
}

a {
  text-decoration: none;
}
</style>
