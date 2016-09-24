import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import FourYears from './components/fourYears.vue'
import Wds from './components/Wds.vue'
import Zgl from './components/Zgl.vue'
import Wd from './components/Wd.vue'
import Zqz from './components/Zqz.vue'
import Gjw from './components/Gjw.vue'
import Ww from './components/Ww.vue'
//import TimeEntries from './components/TimeEntries.vue'
//import LogTime from './components/LogTime.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/Home': {
    component: Home
  },
  '/fourYears':{
    component: FourYears
  },
  '/wds': {
    component: Wds
    // ,
    // subRoutes: {
    //   '/log-time': {
    //     component: LogTime
    //   }
    // }
  },
  'zgl':{
    component: Zgl
  }
  ,
  'wd':{
    component: Wd
  }
  ,
  'zqz':{
    component: Zqz
  }
  ,
  'gjw':{
    component: Gjw
  }
  ,
  'ww':{
    component: Ww
  }
})

router.redirect({
  '*': '/Home'
})

router.start(App, '#app')
