<template>
  <div id="app">
    <img style="width: 400px;" src="https://miro.medium.com/max/1400/0*GNk0sTDMLswggbQE.jpg" alt>
    <button @click="showDialog('Apple')">Show Apple Modal</button>
    <button @click="showDialog('Banna')">Show Banna Modal</button>

    <v-modal name="Apple">
      <div style="background-color: white;">
        <div style="height: 200px;"></div>
        <div class="bTn" @click="closeDialog('Apple')">Close</div>
      </div>
    </v-modal>

    <v-modal name="Banna" :height="700" :width="600" :maxHeight="700">
      <div style='height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center'>
        <h1>Title</h1>
        <div class="bTn" @click="closeDialog('Banna')">Close</div>
      </div>
    </v-modal>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    showDialog(name) {
      this.$VModal.show(name)
    },
    closeDialog(name) {
      this.$VModal.hide(name)
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

.bTn {
  width: 100%;
  padding: 16px 10px;
  text-align: center;
  background-color: orange;
  cursor: pointer;
  color: white;
}
</style>
