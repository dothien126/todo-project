export type TokenType = {
  _id: string;
  role: string;
  email: string;
};

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
  docVersion: number;
  isDisabled: boolean;
};

export type DecodeType = {
  id: string;
  username: string;
  email: string;
  role: string;
};

export type CustomerType = {
  _id: string;
  user: any;
  phone: string;
};

export type CreateTodo = {
  title: string;
  content: string;
};

export type UpdateTodo = {
  title: string;
  content: string;
  status: boolean;
};
