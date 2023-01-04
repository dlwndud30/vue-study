import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', //해시값 제거
  routes:[
    {
        path:'/',
        redirect: '/news'
    },
    {
        path: '/news',  //url에 대한 정보 = url 주소
        component: NewsView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
        {
        path: '/jobs',  //url에 대한 정보 = url 주소
        component: JobsView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
        {
        path: '/ask',  //url에 대한 정보 = url 주소
        component: AskView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
    {
        path: '/item',  //url에 대한 정보 = url 주소
        component: ItemView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
    {
        path: '/user',  //url에 대한 정보 = url 주소
        component: UserView,  //url 주소로 갔을 때 표시할 컴포넌트
    },
  ]
});