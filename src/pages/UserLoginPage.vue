<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="Account"
          placeholder="Please enter your account"
          :rules="[{ required: true, message: 'Please fill in your account' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="Password"
          placeholder="Please enter your password"
          :rules="[{ required: true, message: 'Please fill in your password' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

import {ref} from 'vue';
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";

const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  console.log(res, "user login");
  if (res.code === 0 && res.data) {
    showToast("login success");

    const redirectUrl = route.query?.redirect as string ?? '/';
    window.location.href = redirectUrl;
  } else {
    showToast("login fail");
  }
};


</script>

<style scoped>

</style>