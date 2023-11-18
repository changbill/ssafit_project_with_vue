<template>
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h5 class="mt-2 mb-4" style="font-weight: bold">
      <b class="bi bi-person-circle"> 회원가입</b>
    </h5>
    <div class="input-group mb-3">
      <span
        class="input-group-text"
        id="basic-addon1"
        style="background-color: rgb(158, 192, 243)"
      >
        <i class="bi-pencil-square"></i
      ></span>
      <input
        type="id"
        class="form-control"
        v-model="id"
        placeholder="아이디"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span
        class="input-group-text"
        id="basic-addon1"
        style="background-color: rgb(203, 217, 238)"
      >
        <i class="bi bi-shield-lock"></i
      ></span>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="비밀번호"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-3">
      <span
        class="input-group-text"
        id="basic-addon1"
        style="background-color: rgb(158, 192, 243)"
      >
        <i class="bi bi-shield-lock-fill"></i
      ></span>
      <input
        type="password"
        class="form-control"
        v-model="password2"
        placeholder="비밀번호 확인"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="input-group mb-4">
      <span
        class="input-group-text"
        id="basic-addon1"
        style="background-color: rgb(203, 217, 238)"
      >
        <i class="bi-person-badge-fill"></i
      ></span>
      <input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="이름"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="d-flex justify-content-center">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" @click="regist">
          가입하기
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
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const id = ref("");
const password = ref("");
const password2 = ref("");
const name = ref("");

const users = computed(() => userStore.users);

onMounted(() => {
  userStore.setUsers();
});

const regist = () => {
  if (
    id.value === "" ||
    password.value === "" ||
    password2.value === "" ||
    name.value === ""
  ) {
    alert("모든 내용을 입력해주세요");
    return;
  }

  if (password.value !== password2.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (Array.isArray(users.value) && users.value.length > 0) {
    const userExists = users.value.some((user) => user.id === id.value);
    if (userExists) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }
  }

  const user = {
    id: id.value,
    pass: password.value,
    name: name.value,
  };
  userStore.createUser(user);
};

const cancel = () => {
  id.value = "";
  password.value = "";
  password2.value = "";
  name.value = "";
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
