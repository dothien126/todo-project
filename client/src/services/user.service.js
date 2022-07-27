import { request } from './request';

export const requestGetAllUsers = async () => {
  return await request.get('/user');
};

export const requestDeleteUser = async (userId) => {
  return await request.delete(`/user/${userId}`);
};

// const updateUserForm = {
//   _id,
//   username,
//   role,
//   isActive,
// };
export const requestUpdateUser = async (updateUserForm) => {
  return await request.put(`/user/${updateUserForm._id}`, updateUserForm);
};
