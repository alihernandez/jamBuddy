import http from "../http-common";
class PostsDataService {
  getAll() {
    return http.get("/posts");
  }
  get(id) {
    return http.get(`/posts/${id}`);
  }
}
  export default new PostsDataService();