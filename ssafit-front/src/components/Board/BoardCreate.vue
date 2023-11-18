<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5>리뷰 작성</h5>
    <hr />
    <div class="main-form">
      <div>
        <div class="mb-3 w-100 max-vw-100">
          <label for="review-title" class="form-label">제 목</label>
          <input
            type="text"
            class="form-control"
            id="review-title"
            placeholder="제목을 입력해주세요."
            v-model="board.title"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="review-writer" class="form-label">작 성 자</label>
          <input
            class="form-control"
            id="review-writer"
            style="resize: none"
            placeholder="작성자를 작성해주세요."
            v-model="board.writer"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="review-content" class="form-label">내 용</label>
          <textarea
            class="form-control"
            id="review-content"
            rows="4"
            style="resize: none"
            placeholder="내용을 작성해주세요."
            v-model="board.content"
          ></textarea>
        </div>
      </div>
      <div class="form-downside d-flex justify-content-center pt-3">
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="createBoard"
        >
          등록
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="cancel">
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBoardStore } from "@/stores/boardStore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = useBoardStore();

const board = ref({
  video_id: route.params.video_id,
  title: "",
  writer: "",
  content: "",
});

const createBoard = function () {
  store.createBoard(board.value);
};

const cancel = function () {
  router.push(`/board/${route.params.video_id}`);
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

button {
  margin: 3px;
}
</style>
