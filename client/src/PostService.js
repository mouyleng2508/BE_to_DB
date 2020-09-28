import axios from 'axios';

axios.defaults.baseURL = "http://fsd-bootcamp.herokuapp.com/api/tasklist/";

export default class PostService{
    
    //Get Posts
    getPosts() {
        return axios.get('/')
    }

    //Create Post
    insertPost(task) {
        return axios.post('/', task);
    }
        
    //Delete Post
    deletePost(id) {
        return axios.delete(`/${id}`);
    }
}
