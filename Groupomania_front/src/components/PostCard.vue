<template>
  <router-link
    class="event-link"
    :to="{ name: 'PostDetails', params: { id: post._id } }"
  >
    <li class="event-card">
      <h4 class="event-card__title">
        {{
          post.title.length > 10 ? post.title.slice(0, 10) + "..." : post.title
        }}
      </h4>
      <h5 class="event-card__author">Created by: {{ post.author }}</h5>
      <p class="event-card__preview">
        {{
          post.message.length > 30
            ? post.message.slice(0, 30) + "..."
            : post.message
        }}
      </p>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 18px;
  border-radius: 20px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.event-card__title {
  font-size: 1.3em;
}
.event-card__author {
  font-size: 0.7em;
  color: #fd2d01;
}
.event-card__preview {
  font-size: 1.1em;
  margin-top: 15px;
}
@media (min-width: 768px) {
  .event-card {
    width: 400px;
  }
}
</style>
