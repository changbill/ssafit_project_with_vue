<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5>리뷰 수정</h5>
    <hr />
    <div class="main-form">
      <div>
        <div class="mb-3 w-100 max-vw-100">
          <label for="title" class="form-label">제 목</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="store.board.title"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="writer" class="form-label">작 성 자</label>
          <input
            class="form-control"
            id="writer"
            style="resize: none"
            readonly
            v-model="store.board.writer"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="review-content" class="form-label">내 용</label>
          <textarea
            class="form-control"
            id="review-content"
            rows="4"
            style="resize: none"
            v-model="store.board.content"
          ></textarea>
        </div>
      </div>
      <div class="form-downside d-flex justify-content-center pt-3">
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="updateBoard"
        >
          수정
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="cancel">
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBoardStore } from "@/stores/boardStore";
import { useRouter } from "vue-router";

const store = useBoardStore();
const router = useRouter();

const updateBoard = () => {
  store.updateBoard();
};

const cancel = () => router.push({ name: "boardList" });
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
