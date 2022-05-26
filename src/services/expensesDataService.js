import http from "../http-common";
class ExpensesDataService {
  getAll() {
    console.log("hello");
    return http.get("/expenses");
  }
  get(id) {
    return http.get(`/expenses/${id}`);
  }
  create(data) {
    return http.post("/expenses", data);
  }
  update(id, data) {
    return http.put(`/expenses/${id}`, data);
  }
  delete(id) {
    return http.delete(`/expenses/${id}`);
  }
  deleteAll() {
    return http.delete(`/expenses`);
  }
  findByTitle(title) {
    return http.get(`/expenses?title=${title}`);
  }
}
export default new ExpensesDataService();