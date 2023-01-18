import http from "../http-common";
class ProductServices {
  getAll() {
    return http.get("/GetUsers");
  }
  create(data) {
    return http.post("/CreateUpdateUser", data);
  }
  update(id, data) {
    return http.put(`/CreateUpdateUser/${id}`, data);
  }
  delete(id) {
    return http.delete(`/DeleteUser/${id}`);
  }
}
export default new ProductServices();
