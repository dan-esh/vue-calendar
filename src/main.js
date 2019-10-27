import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAY2FBXPi-zI0RE8O6-6VO4EqWTbdJsmwg",
  authDomain: "vue-calendar-deff4.firebaseapp.com",
  databaseURL: "https://vue-calendar-deff4.firebaseio.com",
  projectId: "vue-calendar-deff4",
  storageBucket: "vue-calendar-deff4.appspot.com",
  messagingSenderId: "706482613683",
  appId: "1:706482613683:web:a08fba0517748a48b2efc6"
});

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
