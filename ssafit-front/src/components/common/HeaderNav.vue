<template>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />

  <div>
    <header>
      <nav class="header-nav">
        <div>
          <RouterLink to="/"
            ><b class="bi bi-house-door-fill fs-2 header-menu">
              SSAFIT</b
            ></RouterLink
          >
          <RouterLink to="/partvideo"
            ><b class="bi bi-play-btn fs-3"> 부위별 영상</b></RouterLink
          >
        </div>
        <div class="d-flex">
          <RouterLink to="/user/register"
            ><b class="bi bi-person-plus fs-3 header-menu">
              회원가입
            </b></RouterLink
          >
          <a href="#" v-if="getUser" @click="logout"
            ><b class="bi bi-person-check fs-3"> 로그아웃</b></a
          >
          <RouterLink to="/user/login" v-else
            ><b class="bi bi-person-fill fs-3"> 로그인</b></RouterLink
          >
        </div>
      </nav>
    </header>
    <article>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/img/1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/img/2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/img/3.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const logout = () => {
  userStore.setLogout();
};

const getUser = computed(() => (userStore.loginUser ? true : false));
</script>

<style>
/* header 태그 안에 CSS 속성 */
header {
  height: 70px;
  background-color: rgb(0, 0, 0);
  line-height: 70px;
  padding: 0px 30px;
  font-weight: bold;
}

header a {
  text-decoration: none;
  color: white;
}

.header-nav {
  display: flex;
  justify-content: space-between;
}

.header-menu {
  display: inline-block;
  margin-right: 20px;
}

a:hover {
  color: #03a9f4;
}
</style>
