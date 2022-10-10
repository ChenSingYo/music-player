<template>

  <section class="container mx-auto mt-6">
      <!-- Main Content -->
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <UploadVue ref="upload" :addSong="addSong"/>
      </div>
      <div class="col-span-2">
        <div
          class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <composition-item
              v-for="(song, i) in songs"
              :key="song.docID"
              :song="song"
              :index="i"
              :updateSong="updateSong"
              :removeSong="removeSong"
              :updateUnsavedFlag="updateUnsavedFlag"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import useUserStore from "@/stores/user";
import CompositionItem from "@/components/CompositionItem.vue";
import UploadVue from "@/components/Upload.vue";
import { auth, songsCollection } from "@/includes/firebase";

export default {
  name: "manage",
  components: {
    UploadVue,
    CompositionItem,
  },
  async created() {
    const snapshot = await songsCollection
      .where("uid", "==", auth.currentUser.uid)
      .get();
    snapshot.forEach(this.addSong);
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false
    };
  },
  methods: {
    updateSong(i, val) {
      this.songs[i].modified_name = val.modified_name
      this.songs[i].genre = val.genre
    },
    removeSong(i){
      this.songs.splice(i,1)
    },
    addSong(document){
      const song = {
        ...document.data(),
        docID: document.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(val){
      this.unsavedFlag = val
    }
  },
    beforeRouteLeave(to, from, next) {
      if(!this.unsavedFlag){
        next()
      } else {
        const leave = confirm('You have unsaved changes, Are you sure to leave?')
        next(leave)
      }
      this.$refs.upload.cancelUploads()
  },
  // beforeRouteEnter(to, from, next) {
  //   const store = useUserStore();
  //   if (store.userLoggedIn) {
  //     next();
  //   } else {
  //     next({ name: "home" });
  //   }
  // },
};
</script>

<style></style>
