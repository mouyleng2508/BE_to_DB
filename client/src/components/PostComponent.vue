<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <div class="create-post">
      <label for="create-post">Say Something</label>
      <input type="text" 
            id="create-post"
            v-model="text"
            placeholder="Create a post">
      <button class="waves-effect waves-light green btn" v-on:click="createPost">Post</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div class="post"
          v-for="(post, index) in posts.data"
          v-on:click="deletePost(post._id)"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"

      > 
        {{post.dateCreated}}
        <!-- {{ '${post.dateCreated.getDate()}/${post.dateCreated.getMonth()}/${post.dateCreated.getFullYear()}' }} -->
        <p class="text">{{post.task}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
const post_service = new PostService()

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    }
  },
  async created() {
    try {
      this.posts = await post_service.getPosts();
      console.log(this.posts.data)
    }catch(err) {
      this.error = err.messsage;
    }
  },
  methods: {
    async createPost() {
      if (this.text != "") {
        await post_service.insertPost({"task":this.text});
        this.posts = await post_service.getPosts();
      }
      else {
        alert("Warning: No post is enetered!")
      }
    },
    async deletePost(id) {
      console.log("Hiii")
      await post_service.deletePost(id);
      this.posts = await post_service.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container {
max-width: 800px;
margin: 0 auto;
background-image: url('.././assets/bg.png');
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
height: 100%;
margin-top: 0px;
}

p.error {
border: 1px solid #ff5b5f;
background-color: #ffc5c1;
padding: 10px;
margin-bottom: 30px;
}

div.post {
position: relative;
border-radius: 10px;
border: 1px solid #f5b0c1;
background-color: #a34f72d8;
padding: 10px 10px 30px 10px;
margin-bottom: 5px;
}

div.created-at {
position: absolute;
top: 0;
left: 0;
padding: 5px 15px 5px 15px;
background-color: darkgreen;
color: white;
font-size: 13px;
}

p.text {
font-size: 20px;
font-weight: 700;
margin-bottom: 0;
}

</style>
