<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="Search Team" @search="onSearch"/>
    <van-tabs v-model:active="active" @change="onTabChange">
      <van-tab title="public" name="public" />
      <van-tab title="private" name="private" />
    </van-tabs>
    <div style="margin-bottom: 16px" />
    <van-button type="primary" icon="plus" class="add-button" @click="doJoinTeam"></van-button>
    <team-card-list :team-list="teamList"/>
    <van-empty v-if="teamList?.length < 1" description="No data"/>
  </div>

</template>

<script setup>

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showToast} from "vant";


const router = useRouter();
const searchText = ref('');
const active = ref('public')

/**
 * 切换查询状态
 * @param name
 */
const onTabChange = (name) => {
  // 查公开
  if (name === 'public') {
    listTeam(searchText.value, 0);
  } else {
    // 查加密
    listTeam(searchText.value, 2);
  }
}


const doJoinTeam = () => {
  router.push({
    path: "/team/add"
  })
}

const teamList = ref([]);

/**
 * 搜索队伍
 * @param val
 * @param status
 * @returns {Promise<void>}
 */
const listTeam = async (val = '', status = 0) => {
  const res = await myAxios.get("/team/list", {
    params: {
      searchText: val,
      pageNum: 1,
      status,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    showToast('加载队伍失败，请刷新重试');
  }
}

// 页面加载时只触发一次
onMounted( () => {
  listTeam();
})

const onSearch = (val) => {
  listTeam(val);
};




</script>

<style scoped>
#teamPage {

}
</style>