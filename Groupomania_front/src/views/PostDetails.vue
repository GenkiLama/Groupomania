<template>
  <div class="post-details" v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="post.imageUrl" class="post-img" /><br />
    <p class="post-message">{{ post.message }}</p>

    <div class="post-btn-container">
      <button
        v-if="post.userId === user.userId || user.role === 'admin'"
        @click="deletePost"
      >
        Delete
      </button>
      <button
        v-if="post.userId === user.userId || user.role === 'admin'"
        @click="redirectToEdit"
      >
        Edit
      </button>
      <button v-if="post.userId != user.userId" @click="likePost">
        {{ likeOrDislike }}
      </button>
    </div>
    <h4>
      {{ likesCount }}
    </h4>
  </div>
</template>

<script>
import { usePostStore } from "../store/PostStore.js";
import { useUserStore } from "../store/UserStore.js";
export default {
  props: ["id"],
  setup() {
    const postStore = usePostStore();
    const userStore = useUserStore();
    return {
      postStore,
      userStore,
    };
  },
  created() {
    this.postStore.fetchPost(this.id);
  },
  methods: {
    onsubmit() {
      console.log("click");
    },
    deletePost() {
      if (
        this.userStore.user.userId === this.postStore.post.userId ||
        this.userStore.user.role === "admin"
      ) {
        this.postStore.deletePost(this.id).then(() => {
          this.$router.push({
            name: "PostList",
          });
        });
      } else {
        return;
      }
    },
    redirectToEdit() {
      if (
        this.userStore.user.userId === this.postStore.post.userId ||
        this.userStore.user.role === "admin"
      ) {
        const destinationID = this.postStore.post._id;
        this.$router.push({
          name: "EditPost",
          params: { id: destinationID },
        });
      } else {
        console.log(`id de l utlisateur : ${this.userStore.user.userId}
        id du createur du post : ${this.postStore.post.userId}`);
      }
    },
    likePost() {
      const createdBy = this.postStore.post.userId;
      const userId = this.userStore.user.userId;
      const postId = this.postStore.post._id;

      if (userId != createdBy) {
        if (this.postStore.post.usersLiked.includes(userId)) {
          const like = -1;
          this.postStore.likePost(postId, like);
        } else {
          const like = 1;
          this.postStore.likePost(postId, like);
        }
      } else {
        console.log(
          "Allons ... tu ne vas pas aimer tes propres postes quand meme ..."
        );
      }
    },
  },
  computed: {
    likesCount() {
      const likes = this.postStore.post.likes;
      if (likes === 0) {
        return `Personne n'a encore aimé ce post`;
      }
      if (likes === 1) {
        return "Une personne a aimé ce post ";
      }
      return `${likes} collègues ont aimé ce post`;
    },
    post() {
      return this.postStore.post;
    },
    user() {
      return this.userStore.user;
    },
    likeOrDislike() {
      if (
        this.postStore.post.usersLiked &&
        this.postStore.post.usersLiked.includes(this.userStore.user.userId)
      ) {
        return "Unlike";
      }
      return "Like";
    },
  },
};
</script>
