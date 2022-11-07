<template>
  <div>
    <h1>Groupomania</h1>
    <ul class="events">
      <PostCard v-for="post in postStore.posts" :key="post._id" :post="post" />
    </ul>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import { usePostStore } from "../store/PostStore.js";
import { useUserStore } from "../store/UserStore.js";
export default {
  name: "PostList",
  components: {
    PostCard,
  },
  setup() {
    const postStore = usePostStore();
    const userStore = useUserStore();
    return {
      postStore,
      userStore,
    };
  },

  created() {
    this.postStore.fetchPosts();
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .events {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>
