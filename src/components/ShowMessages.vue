<template>
  <v-container>
    <h1>{{ message }}</h1>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "見えるかい？",
      icons: [
        { color: "red", icon_name: "play_arrow" },
        { color: "blue", icon_name: "pause" },
        { color: "green", icon_name: "settings" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>

