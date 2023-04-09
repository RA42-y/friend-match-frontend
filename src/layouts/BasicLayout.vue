<template>
  <van-nav-bar
      :title="title"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content" style="padding-bottom: 50px;">
    <router-view/>
  </div>
<!--  <router-link to="/">Go to home</router-link>-->
<!--  <router-link to="/team">team</router-link>-->

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">Home</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends-o" name="team">Team</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user-circle-o" name="user">User</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>
import {ref} from "vue";
import {showToast, Toast} from "vant";
import routes from "../config/route";

import {useRouter} from "vue-router";
const router = useRouter();

const DEFAULT_TITLE = 'Friend Match';
const title = ref(DEFAULT_TITLE);

/**
 * 根据路由切换标题
 */
router.beforeEach((to, from) => {
  const toPath = to.path;
  const route = routes.find((route) => {
    return toPath == route.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})

const onClickLeft = () =>  {
  router.back();
}
const onClickRight = () => {
  router.push("/search");
}

</script>