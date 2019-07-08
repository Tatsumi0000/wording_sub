<template>
  <v-app class="my_backgound">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Start from "./components/Start";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    originalaa: function() {
      const Store = require("electron-store");
      const store = new Store();
      store.set("unicorn", "🦄");
      console.log(store.get("unicorn"));
      //=> '🦄'
      // Use dot-notation to access nested properties
      store.set("foo.bar", true);
      console.log(store.get("foo"));
      //=> {bar: true}

      store.delete("unicorn");
      console.log(store.get("unicorn"));
    }
  }
};
</script>

<style scoped>
.my_backgound {
  background-color: dimgrey;
}
</style>
