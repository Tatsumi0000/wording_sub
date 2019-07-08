<template>
  <v-container>
    <v-layout row align-center>
      <!-- text-XX-centerで中央寄せにする -->
      <v-flex
        text-sm-center
        text-md-center
        text-lg-center
        text-xl-center
        sm4
        md4
        lg4
        xl4
        pa-3
        v-for="icon in icons"
        :key="icon"
      >
        <v-btn align-center fab class="btn_size white--text" :color="icon.color">
          <v-icon>{{ icon.icon_name }}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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

