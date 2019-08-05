<template>
  <div id="app">
    <h1>Button Size</h1>
    <div class="flex">
      <v-btn class="mr-4" @click="showDialog('Apple')">Button 01</v-btn>
      <v-btn class="mr-4" size="medium" @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn class="mr-4" size="large" @click="showDialog('Apple')"
        >Button 03</v-btn
      >
    </div>
    <h1 class="pt-4">Button Rounded</h1>
    <div class="flex pt-4">
      <v-btn class="mr-4" rounded="none" @click="showDialog('Apple')"
        >Button 01</v-btn
      >
      <v-btn class="mr-4" rounded="small" @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn class="mr-4" rounded="full" @click="showDialog('Apple')"
        >Button 03</v-btn
      >
    </div>
    <h1 class="pt-4">Button Theme</h1>
    <div class="flex pt-4">
      <v-btn
        class="mr-4"
        theme="primary"
        size="medium"
        @click="showDialog('Apple')"
        >Button 01</v-btn
      >
      <v-btn
        class="mr-4"
        theme="modern"
        size="medium"
        @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn
        class="mr-4"
        theme="dark"
        size="medium"
        @click="showDialog('Apple')"
        >Button 03</v-btn
      >
      <v-btn
        class="mr-4"
        theme="gray"
        size="medium"
        @click="showDialog('Apple')"
        >Button 04</v-btn
      >
    </div>
    <h1 class="pt-4">Button Outline</h1>
    <div class="flex pt-4">
      <v-btn
        class="mr-4"
        outline
        theme="primary"
        size="medium"
        @click="showDialog('Apple')"
        >Button 01</v-btn
      >
      <v-btn
        class="mr-4"
        outline
        theme="modern"
        size="medium"
        @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn
        class="mr-4"
        outline
        theme="dark"
        size="medium"
        @click="showDialog('Apple')"
        >Button 03</v-btn
      >
      <v-btn
        class="mr-4"
        outline
        theme="gray"
        size="medium"
        @click="showDialog('Apple')"
        >Button 04</v-btn
      >
    </div>
    <h1 class="pt-4">Button Disabled Status</h1>
    <div class="flex pt-4">
      <v-btn
        class="mr-4"
        disabled
        theme="primary"
        size="medium"
        @click="showDialog('Apple')"
        >Button 01</v-btn
      >
      <v-btn
        class="mr-4"
        disabled
        theme="modern"
        size="medium"
        @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn
        class="mr-4"
        disabled
        theme="dark"
        size="medium"
        @click="showDialog('Apple')"
        >Button 03</v-btn
      >
      <v-btn
        class="mr-4"
        disabled
        theme="gray"
        size="medium"
        @click="showDialog('Apple')"
        >Button 04</v-btn
      >
    </div>
    <h1 class="pt-4">Button Disabled Status ( Click Unlock )</h1>
    <div class="flex pt-4">
      <v-btn class="mr-4" @click="onUnLock">Unlock</v-btn>
      <v-btn
        class="mr-4"
        :disabled="lock"
        theme="primary"
        size="medium"
        @click="onUnLock"
        >Button 01</v-btn
      >
      <v-btn
        class="mr-4"
        :disabled="lock"
        theme="modern"
        size="medium"
        @click="onUnLock"
        >Button 02</v-btn
      >
      <v-btn
        class="mr-4"
        :disabled="lock"
        theme="dark"
        size="medium"
        @click="onUnLock"
        >Button 03</v-btn
      >
      <v-btn
        class="mr-4"
        :disabled="lock"
        theme="gray"
        size="medium"
        @click="onUnLock"
        >Button 04</v-btn
      >
    </div>
    <h1 class="pt-4">Button Loading Status</h1>
    <div class="flex pt-4">
      <v-btn
        class="mr-4"
        loading
        theme="primary"
        size="medium"
        @click="showDialog('Apple')"
        >Button 01</v-btn
      >
      <v-btn
        class="mr-4"
        loading
        theme="modern"
        size="medium"
        @click="showDialog('Apple')"
        >Button 02</v-btn
      >
      <v-btn
        class="mr-4"
        loading
        theme="dark"
        size="medium"
        @click="showDialog('Apple')"
        >Button 03</v-btn
      >
      <v-btn
        class="mr-4"
        loading
        theme="gray"
        size="medium"
        @click="showDialog('Apple')"
        >Button 04</v-btn
      >
    </div>
    <h1>Full Width Button</h1>
    <div style="width: 500px;">
      <v-btn full>Button 01</v-btn>
      <v-btn theme="modern" full>Button 01</v-btn>
      <v-btn theme="dark" full>Button 01</v-btn>
      <v-btn theme="gray" full>Button 01</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      lock: true,
      message: '',
    }
  },
  methods: {
    showDialog(name = '') {
      this.message = name
    },
    onUnLock() {
      this.lock = false
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body,
html {
  font-family: 'Lato', sans-serif !important;
}
.flex {
  display: flex;
}
.pt-4 {
  padding-top: 16px;
}
.mr-4 {
  margin-right: 16px;
}
</style>
