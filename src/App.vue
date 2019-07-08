<template>
  <v-app class="my_backgound">
    <v-content>
      <Start/>
    </v-content>
  </v-app>
</template>

<script>
import Start from "./components/Start";

export default {
  name: "App",
  components: {
    Start
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.my_backgound {
  background-color: dimgrey;
}
</style>
