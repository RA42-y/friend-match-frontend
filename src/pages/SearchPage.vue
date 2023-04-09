<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="Please enter a tag to search"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">Selected Tags</van-divider>
  <div v-if="activeIds.length === 0">Please select tags</div>

  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>


  <van-divider content-position="left">Select Tag</van-divider>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding: 12px;">
    <van-button block type="primary" @click="doSearchResult">Search</van-button>
  </div>



</template>

<script setup>
import {ref} from 'vue';
import {Toast, showToast} from 'vant';
import {useRouter} from "vue-router";

const router = useRouter();

const searchText = ref('');

const originTagList = [
  {
    text: 'Gender',
    children: [
      {text: 'Male', id: 'Male'},
      {text: 'Female', id: 'Female'},
    ],
  },
  {
    text: 'Specialization',
    children: [
      {text: 'Frontend', id: 'Frontend'},
      {text: 'Backend', id: 'Backend'},
      {text: 'Fullstack', id: 'Fullstack'},
      {text: 'Cloud', id: 'Cloud'},
      {text: 'DevOps', id: 'DevOps'},
    ],
  },
  {
    text: 'Language',
    children: [
      {text: 'Java', id: 'Java'},
      {text: 'Python', id: 'Python'},
      {text: 'C++', id: 'C++'},
      {text: 'PHP', id: 'PHP'},
      {text: 'Swift', id: 'Swift'},
      {text: 'Kotlin', id: 'Kotlin'},
    ],
  },
];

let tagList = ref(originTagList);
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  })
}
const onCancel = () => {
  searchText.value = "";
  tagList.value = originTagList;
}
const activeIds = ref([]);
const activeIndex = ref(0);

const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}

const doSearchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value,
    },
  })
}

</script>

<style scoped>

</style>