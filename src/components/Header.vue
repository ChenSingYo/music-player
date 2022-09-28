<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a
                class="px-2 text-white"
                href="#"
                @click.prevent="userStore.signOut"
                >Logout</a
              >
            </li>
          </template>
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
  },
  methods: {
    toggleAuthModal() {
      // mapWritableState使用之後，this直接指向isOpen，不用加上modalStore
      // this.isOpen = !this.isOpen;
      this.modalStore.isOpen = !this.modalStore.isOpen;
      // console.log( this.modalStore.isOpen)
    },
  },
};
</script>

<style></style>
