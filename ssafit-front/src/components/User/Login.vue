<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5 class="mt-2 mb-4" style="font-weight: bold">
      <b class="bi bi-person-fill"> 로그인</b>
    </h5>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="id"
        placeholder="아이디"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="비밀번호"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="d-flex justify-content-center">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" @click="login">
          로그인
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="cancel">
          취소
        </button>
      </div>
    </div>
    <footer>
      <div class="footer-p">
        <p>&copy;SSAFIT PROJECT</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const id = ref("");
const password = ref("");

const login = () => {
  const user = {
    id: id.value,
    pass: password.value,
  };

  userStore.setLoginUser(user);
};

const cancel = () => {
  id.value = "";
  password.value = "";
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin-top: 30px;
  border: 1px solid lightgray;
  border-radius: 5%;
  text-align: center;
}

.footer-p {
  text-align: center;
  color: rgb(160, 160, 160);
  padding-top: 20px;
}
</style>
