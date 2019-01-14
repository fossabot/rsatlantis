import Vue from 'vue'

export default {
  login(username, password) {
    return Vue.axios.post('/api/auth/login/', { username, password });
  },
  logout() {
    return Vue.axios.post('/api/auth/logout/', {});
  },
  createAccount(username, password1, password2, email) {
    return Vue.axios.post('/api/registration/', { username, password1, password2, email });
  },
  changeAccountPassword(password1, password2) {
    return Vue.axios.post('/api/auth/password/change/', { password1, password2 });
  },
  sendAccountPasswordResetEmail(email) {
    return Vue.axios.post('/api/auth/password/reset/', { email });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) {
    return Vue.axios.post('/api/auth/password/reset/confirm/', { uid, token, new_password1, new_password2 });
  },
  getAccountDetails() {
    return Vue.axios.get('/api/users/current/');
  },
  updateAccountDetails(data) {
    return Vue.axios.patch('/api/auth/user/', data);
  },
  verifyAccountEmail(key) {
    return Vue.axios.post('/api/registration/verify-email/', { key });
  },
};