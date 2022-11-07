<template>
  <h1>Modify a post</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <h3>Name & describe your post</h3>

      <label>Title</label>
      <input
        v-model="postCopy.title"
        type="text"
        placeholder="Title"
        pattern="[a-zA-Z0-9' ,.?!;]+"
      />

      <label>Message</label>
      <input
        v-model="postCopy.message"
        type="text"
        placeholder="Description"
        pattern="[a-zA-Z0-9' ,.?!;]+"
      />
      <label>File</label>
      <input type="file" @change="onFileSelected" />
      <button type="submit">Submit</button>
    </form>
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
      id: this.postStore.post._id,
      postCopy: {
        ...this.postStore.post,
        file: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const post = new FormData();
      if (this.postCopy.file) {
        post.append("image", this.postCopy.file, this.postCopy.file.name);
      } else {
        console.log("pas dimages");
      }
      post.append("title", this.postCopy.title);
      post.append("message", this.postCopy.message);
      this.postStore.EditPost(this.id, post).then(() => {
        this.$router.push({
          name: "PostList",
        });
      });
    },
    onFileSelected(post) {
      this.postCopy.file = post.target.files[0];
    },
  },
};
</script>
