const deps = [
  // {
  //   name: 'vue',
  //   library: 'Vue',
  //   js: 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
  //   css: '',
  // },
  // {
  //   name: 'vue-router',
  //   library: 'VueRouter',
  //   js: 'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
  //   css: '',
  // },
  // {
  //   name: 'vuex',
  //   library: 'Vuex',
  //   js: 'https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.js',
  //   css: '',
  // },
  // {
  //   name: 'axios',
  //   library: 'axios',
  //   js: 'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
  //   css: '',
  // },
  // {
  //   name: 'element-ui',
  //   library: 'ELEMENT',
  //   js:
  //     'https://cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/index.js' /* , css: 'https://cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/theme-chalk/index.css' */,
  // },
  // {
  //   name: 'lodash',
  //   library: '_',
  //   js: 'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js',
  //   css: '',
  // },
  // {
  //   name: 'js-cookie',
  //   library: 'Cookies',
  //   js: 'https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js',
  //   css: '',
  // },
  // {
  //   name: 'lowdb',
  //   library: 'low',
  //   js: 'https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/low.min.js',
  //   css: '',
  // },
  // {
  //   name: 'lowdb/adapters/LocalStorage',
  //   library: 'LocalStorage',
  //   js: 'https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/LocalStorage.min.js',
  //   css: '',
  // },
  // {
  //   name: 'markdown-it',
  //   library: 'markdownit',
  //   js:
  //     'https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',
  //   css: '',
  // },
  {
    name: '',
    library: '',
    js: 'https://at.alicdn.com/t/font_1760192_axq33n6snd.js',
    css: '',
  },
  {
    name: '',
    library: '',
    js: '',
    css:
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css',
  },
  // {
  //   name: '',
  //   library: '',
  //   js: '',
  //   css:
  //     'https://cdn.jsdelivr.net/gh/mladenplavsic/css-ripple-effect@master/dist/ripple.css',
  // },
  {
    name: '',
    library: '',
    js: '',
    css:
      'https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css',
  },
  {
    name: '',
    library: '',
    js: '',
    css:
      'https://cdn.jsdelivr.net/npm/font-awesome-animation@0.2.1/dist/font-awesome-animation.min.css',
  },
  // {
  //   name: '',
  //   library: '',
  //   js: '',
  //   css:
  //     'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
  // },
  // {
  //   name: '',
  //   library: '',
  //   js: '',
  //   css:
  //     'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  // },
  // {
  //   name: '',
  //   library: '',
  //   js: '',
  //   css:
  //     'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
  // },
  // { name: '', library: '', js: 'https://unpkg.com/vue-select@latest', css: '' },
  // {
  //   name: 'v-select',
  //   library: 'vselect',
  //   js: '',
  //   css: 'https://unpkg.com/vue-select@latest/dist/vue-select.css',
  // },
];

const externals = {};
deps.forEach((item) => {
  externals[item.name] = item.library;
});

module.exports = deps;
exports.externals = externals;
