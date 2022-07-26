import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/login/Main.vue';
import Register from '../views/register/Main.vue';
import ErrorPage from '../views/error-page/Main.vue';
import TodoForm from '../views/todo-form/Main.vue';
import TodoList from '../views/todo-list/Main.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/error-page',
    name: 'errorPage',
    component: ErrorPage,
  },
  {
    path: '/todo-form',
    name: 'todoForm',
    component: TodoForm,
  },
  {
    path: '/todo-list',
    name: 'todoList',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
