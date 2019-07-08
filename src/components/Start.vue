<template>
  <!-- <v-app> -->
  <v-container>
    <v-layout row>
      <!-- text-XX-centerで中央寄せにする -->
      <v-flex text-sm-center text-md-center text-lg-center text-xl-center sm4 md4 lg4 xl4 pa-3>
        <v-btn fab class="btn_size white--text" v-on:click="original2" color="red">
          <v-icon>play_arrow</v-icon>
        </v-btn>
      </v-flex>
      <v-flex text-sm-center text-md-center text-lg-center text-xl-center sm4 md4 lg4 xl4 pa-3>
        <v-btn fab class="btn_size white--text" v-on:click="original2" color="blue">
          <v-icon>pause</v-icon>
        </v-btn>
      </v-flex>
      <v-flex text-sm-center text-md-center text-lg-center text-xl-center sm4 md4 lg4 xl4 pa-3>
        <!-- <router-link to="/settings"> -->
        <v-btn fab class="btn_size white--text" color="green" to="/settings">
          <v-icon>settings</v-icon>
        </v-btn>
        <!-- </router-link> -->
      </v-flex>
    </v-layout>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { color: "red", icon_name: "play_arrow" },
        { color: "blue", icon_name: "pause" },
        { color: "green", icon_name: "settings" }
      ]
    };
  },
  methods: {
    original2: function() {
      const Store = require("electron-store");
      const store = new Store();
      store.set("unicorn", "ユニコーン");
      console.log(store.get("unicorn"));
      //=> '🦄'
      // Use dot-notation to access nested properties
      store.set("foo.bar", true);
      console.log(store.get("foo"));
      //=> {bar: true}

      store.delete("unicorn");
      console.log(store.get("unicorn"));
    },
    goSettings() {
      this.$router.replace("/settings");
    }
  }
};
</script>

<style scoped>
.btn_size {
  width: 100px;
  height: 100px;
}

.play_icon {
  color: rgba(255, 0, 0, 0.473);
}
.play_icon:hover {
  color: red;
}

.pause_icon {
}
.pause_icon:hover {
  color: blue;
}
</style>

