import { defineStore } from "pinia";
import axios from "axios";
export const usePostStore = defineStore("PostStore", {
  state() {
    return {
      posts: [],
      post: {},
    };
  },
  getters: {
    numberOfEvents: (state) => state.posts.length,
  },
  actions: {
    async fetchPosts() {
      const response = await axios
        .get("http://localhost:3000/api/posts")
        .catch((error) => console.log(error));
      this.posts = response.data.reverse();
    },
    async fetchPost(id) {
      const response = await axios
        .get("http://localhost:3000/api/posts/" + id)
        .catch((e) => console.log(e));
      this.post = response.data;
    },
    async createPost(post) {
      const response = await axios
        .post("http://localhost:3000/api/posts/", post)
        .catch((error) => console.log(error));

      if (response.data) {
        this.posts.push(response.data);
      }
    },
    async deletePost(id) {
      const response = await axios
        .delete("http://localhost:3000/api/posts/" + id)
        .catch((error) => console.log(error));

      this.posts.filter((post) => {
        post.id != response;
      });
      this.post = {};
    },
    async EditPost(id, post) {
      const response = await axios
        .put(`http://localhost:3000/api/posts/${id}/edit`, post)
        .catch((error) => console.log(error));
      if (response) {
        this.post = response.data;
      }
    },
    async likePost(postId, like) {
      const response = await axios
        .post(`http://localhost:3000/api/posts/${postId}`, { like: like })
        .catch((error) => console.log(error));
      this.post = response.data;
    },
  },
});
