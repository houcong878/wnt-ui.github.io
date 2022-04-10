import Vue from 'vue';
import App from './App.vue';
// import '../components/css/demo.scss';
// import '../components/css/card.scss';
// import Demo from '../components/lib/demo/index';
// import Card from '../components/lib/card/index';
// Vue.use(Demo)
// Vue.use(Card)
// import 'wnt-ui878/dist/css/index.css';
// import MUI from 'wnt-ui878';
// console.log(MUI);
import card from 'wnt-ui878'
import 'wnt-ui878/dist/css/card.css'
Vue.use(card)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
