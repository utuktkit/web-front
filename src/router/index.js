import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login.vue'
import sysadmin from '@/views/sysadmin/sysAdmin.vue'
import syshome from '@/views/sysadmin/sysHome.vue'
import syscanmg from '@/views/sysadmin/sysCanmg.vue'
import sysaccmg from '@/views/sysadmin/sysAccmg.vue'
import syscmtmg from '@/views/sysadmin/syscmtmg.vue'
import canadmin from '@/views/canadmin/canAdmin.vue'
import canhome from '@/views/canadmin/canHome.vue'
import mycanteen from '@/views/canadmin/myCanteen.vue'
import cancmtmg from '@/views/canadmin/canCmtmg.vue'
import cancptmg from '@/views/canadmin/canCptmg.vue'
import canmanager from '@/views/canadmin/canManager.vue'
import useradmin from '@/views/tchstu/userAdmin.vue'
import userhome from '@/views/tchstu/userHome.vue'
import userbrocan from '@/views/tchstu/userBrocan.vue'
import usercommity from '@/views/tchstu/userCommity.vue'
import usermessage from '@/views/tchstu/userMessage.vue'
import usercanteen from '@/views/tchstu/userCanteen.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:login,
    },
    {
      path: '/sysadmin',
      name: 'sysadmin',
      component: sysadmin,
      children:[
        {
          path:'/syshome',
          component:syshome
        },
        {
          path:'/syscanmg',
          component:syscanmg
        },
        {
          path:'/sysaccmg',
          component:sysaccmg
        },
        {
          path:'/syscmtmg',
          component:syscmtmg
        },
      ]
    },
    {
      path:'/canadmin',
      component:canadmin,
      children:[
        {
          path:'/canhome',
          component:canhome
        },
        {
          path:'/mycanteen',
          component:mycanteen
        },
        {
          path:'/cancmtmg',
          component:cancmtmg
        },
        {
          path:'/cancptmg',
          component:cancptmg
        },
        {
          path:'/canmanager',
          component:canmanager
        }
      ]
    },
    {
      path:'/useradmin',
      component:useradmin,
      children:[
        {
          path:'/userhome',
          component:userhome
        },
        {
          path:'/userbrocan',
          component:userbrocan
        },
        {
          path:'/usercommity',
          component:usercommity
        },
        {
          path:'/usermessage',
          component:usermessage
        },
        {
          path:'/usercanteen',
          component:usercanteen
        },
      ]
    },
  ]
})
