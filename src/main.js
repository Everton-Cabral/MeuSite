
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.config'


createApp(App)
.use(store)
.use(VueFire,{
    firebaseApp,
    modules:[
        VueFireAuth()
    ]
})
.use(router).mount('#app')
