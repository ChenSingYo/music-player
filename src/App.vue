<template>
  <header-vue />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <play-vue />
  <auth />
</template>

<script>
import Auth from "@/components/Auth.vue";
import HeaderVue from "@/components/Header.vue";
import PlayVue from "@/components/Player.vue";
import useUserStore from "@/stores/user";
import { mapWritableState } from "pinia";
import { auth } from "./includes/firebase";

export default {
  name: "app",
  components: {
    HeaderVue,
    PlayVue,
    Auth,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  opacity: 0;
  transition: all 0.5s linear;
}
</style>
