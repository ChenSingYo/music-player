<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li><a href="#" class="px-2 text-white" @click.prevent="changeLocale">
          {{ currentLocale }}</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";
import { mapStores } from "pinia";
export default {
  name: "Header",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    // 要複寫State裡的資料，只有其中一項時，可以使用mapWritableState
    // ...mapWritableState(useModalStore, ["isOpen"])
    currentLocale(){
      return this.$i18n.locale === 'tw' ? '中文' : 'English'
    }
  },
  methods: {
    toggleAuthModal() {
      // mapWritableState使用之後，this直接指向isOpen，不用加上modalStore
      // this.isOpen = !this.isOpen;
      this.modalStore.isOpen = !this.modalStore.isOpen;
      // console.log( this.modalStore.isOpen)
    },
    signOut() {
      this.userStore.signOut();
      if (this.$route.meta.requiresAuth === true) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocale(){
      this.$i18n.locale = this.$i18n.locale === 'tw' ? 'en' : 'tw'
    }
  },
};
</script>

<style></style>
