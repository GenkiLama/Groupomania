<template>
  <div>
    <h1>Create a Post</h1>

    <div class="form-container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <h3>Name & describe your post</h3>

        <label>Title</label>
        <input
          v-model="post.title"
          type="text"
          placeholder="Title"
          pattern="[a-zA-Z0-9' ,.?!;]+"
        />

        <label>Message</label>
        <input
          v-model="post.message"
          type="text"
          placeholder="Description"
          pattern="[a-zA-Z0-9' ,.?!;]+"
        />

        <label>File</label>
        <input type="file" @change="onFileSelected" />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { usePostStore } from "../store/PostStore.js";
import { useUserStore } from "../store/UserStore.js";
export default {
  setup() {
    const postStore = usePostStore();
    const userStore = useUserStore();
    return {
      postStore,
      userStore,
    };
  },
  data() {
    return {
      post: {
        title: "",
        message: "",
        file: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const post = new FormData();
      if (this.post.file) {
        post.append("image", this.post.file, this.post.file.name);
      } else {
        console.log("pas dimages");
      }
      post.append("title", this.post.title);
      post.append("message", this.post.message);
      post.append("author", this.userStore.user.name);
      this.postStore.createPost(post).then(() => {
        this.$router.push({
          name: "PostList",
        });
      });
    },
    onFileSelected(post) {
      this.post.file = post.target.files[0];
    },
  },
};
</script>
