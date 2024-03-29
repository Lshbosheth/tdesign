import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'
import 'tdesign-vue-next/es/style/index.css';
import './styles'
createApp(App).use(createPinia()).use(TDesign).mount('#app')
