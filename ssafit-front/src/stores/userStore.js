import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "@/util/http-common";

const USER_API = "api-user";

export const useUserStore = defineStore("user", () => {
    // 전체 조회
    const users = ref([]);
    const setUsers = function () {
      axios.get(`${USER_API}/users`).then((res) => {
        users.value = res.data;
      });
    };

    // 회원가입
    const createUser = function (user) {
      axios.post(`${USER_API}/signup`, user).then((res) => {
        users.value = res.data;
        router.push("/");
        alert(`${user.name}님, 회원가입을 환영합니다!`);
      });
    };

    // 로그인
    const loginUser = ref(null);
    const setLoginUser = function (user) {
      axios
        .post(`${USER_API}/login`, user)
        .then((res) => {
          if (res.data != null) {
            if (user.pass == res.data.pass) {
              loginUser.value = res.data;
              alert(`${loginUser.value.name}님, 로그인되었습니다.`);
              router.push("/");
            }
          }
        })
        .catch(() => {
          alert("다시 시도해주십시오.");
          router.push("/");
        });
    };

    // 로그아웃
    const setLogout = function () {
      loginUser.value = null;
      alert("로그아웃 되었습니다.");
      router.push("/");
    };

    return {
      users,
      setUsers,
      createUser,
      loginUser,
      setLoginUser,
      setLogout,
    };
  },
  {
    persist: true,
  }
);
