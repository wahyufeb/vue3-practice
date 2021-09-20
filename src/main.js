import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
/**
 * Membuat Custom Binding pada Vue menggunakan directive
 * mengambil value binding denggan cara akses object value pada parameter bindingg (bindingg.value)
 * styling element menggunakan css dengan penulisan menggggunakan Javascript
 */
app.directive('notif', {
  mounted(el, binding) {
    el.style.backgroundColor = binding.value === 'danger' ? 'red' : 'green'
    el.style.padding = '20px'
    el.style.color = '#FFF'
    el.style.fontSize = `100px`
    el.style.textAlign = 'center'
    el.style.fontFamily = 'Arial'
  }
})
app.mount('#app')