import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import Login from "@/components/User/Login.vue";
import Register from "@/components/User/Register.vue";
import BoardList from "@/components/Board/BoardList.vue";
import BoardCreate from "@/components/Board/BoardCreate.vue";
import BoardUpdate from "@/components/Board/BoardUpdate.vue";
import BoardDetail from "@/components/Board/BoardDetail.vue";
import PartVideo from "@/components/Video/PartVideo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
    },
    {
      path: "/user",
      component: UserView,
      children: [
        {
          path: "login",
          name: "login",
          component: Login,
        },
        {
          path: "register",
          name: "register",
          component: Register,
        },
      ],
    },
    {
      path: "/board",
      name: "board",
      children: [
        {
          path: ":video_id",
          name: "boardList",
          component: BoardList,
        },
        {
          path: ":video_id/create",
          name: "boardCreate",
          component: BoardCreate,
        },
        {
          path: ":video_id/:id/update",
          name: "boardUpdate",
          component: BoardUpdate,
        },
        {
          path: ":video_id/:id",
          name: "boardDetail",
          component: BoardDetail,
        },
      ],
    },
    {
      path: "/partvideo",
      name: "PartVideo",
      component: PartVideo,
    },
  ],
});

export default router;
