import { authRequest } from '../stores/handle/request';

// const loginForm = {
//   username,
//   password,
// };
export const requestLogin = async (username, password) => {
  return await authRequest.post('/login', loginForm, { withCredentials: true });
};

// const registerForm = {
//   username,
//   email,
//   password,
//   passwordConfirm,
// };
export const requestRegister = async (username, email, password, passwordConfirm) => {
  return await authRequest.post('/user', registerForm);
};
