import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: '',
    messageList:[
      {
        id: 1,
        title: '关于js的问题',
        content: 'js有几种类型',
        time: '2024-01-01 12:12:12',
        start: false
      },
      {
        id: 2,
        title: 'h5的问题',
        content: 'h5新增了哪一些标签',
        time: '2024-02-01 12:12:12',
        start: false
      },
      {
        id: 1,
        title: 'js的几个小问题',
        content: 'js中怎样实现循环',
        time: '2024-01-01 12:12:12',
        start: true
      },
      {
        id: 2,
        title: 'h5的几个小问题',
        content: '新增的标签有什么好处',
        time: '2024-02-3 12:12:12',
        start: true
      },
      {
        id: 1,
        title: 'js怎样执行了',
        content: '怎样让他等待',
        time: '2024-01-11 12:12:12',
        start: true
      },
      {
        id: 2,
        title: 'js中promise',
        content: 'promise中几个状态',
        time: '2024-02-15 12:12:12',
        start: true
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
