import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/components/login.vue'),
      meta: { title: '登录页' }
    },
    {
      name: 'admin',
      path: '/admin',
      component: () => import('@/components/admin/admin.vue'),
      meta: { title: '管理员' },
      children: [
        {
          path: '/adfirst',
          name: '查询学生报到情况',
          component: () => import('@/components/admin/adfirst.vue'),
          meta: {
            title: '查询学生报到情况',
            hideclose: true,
          }
        },
        {
          path: '/adsecond',
          name: '绿色通道申请名单',
          component: () => import('@/components/admin/adsecond.vue'),
          meta: {
            title: '绿色通道申请名单',
            hideclose: true,
          }
        },
        {
          path: '/adthird',
          name: '发布入学通知',
          component: () => import('@/components/admin/adthird.vue'),
          meta: {
            title: '发布入学通知',
            hideclose: true,
          }
        },
        {
          path: '/adfourth',
          name: '添加用户',
          component: () => import('@/components/admin/adfourth.vue'),
          meta: {
            title: '添加用户',
            hideclose: true,
          }
        }
      ]
    },
    {
      path: '/home',
      component: () => import('@/components/homepage/homepage.vue'),
      meta: {
        title: '母版页'
      },
      children: [
        {
          path: '/first',
          name: '信息发布与查询',
          component: () => import('@/components/celan/first.vue'),
          meta: {
            title: '信息发布与查询',
            hideclose: true,
          }
        },
        {
          name: 'more',
          path: '/more',
          component: () => import('@/components/celan/more.vue'),
          meta: {
            title: '更多',
            hideclose: true,
          }
        },
        {
          name: 'chakan',
          path: '/chakan',
          component: () => import('@/components/celan/chakan.vue'),
          meta: {
            title: '查看',
            hideclose: true,
          }
        },
        {
          path: '/second',
          name: '入住须知',
          component: () => import('@/components/celan/second'),
          meta: {
            title: '入住须知',
          }
        },
				
		{
		  path: '/third',
		  name: '信息采集',
		  component: () => import('@/components/celan/third'),
		  meta: {
		    title: '信息采集',
		  }
		},
		{
		  path: '/fourth',
		  name: '报到进度',
		  component: () => import('@/components/celan/fourth'),
		  meta: {
		    title: '报到进度',
		  }
		},
		{
		  path: '/fifth',
		  name: '绿色通道',
		  component: () => import('@/components/celan/fifth'),
		  meta: {
		    title: '绿色通道',
		  }
		},
		{
		  path: '/sixth',
		  name: '财务缴费',
		  component: () => import('@/components/celan/sixth'),
		  meta: {
		    title: '财务缴费',
		  }
    }
      ]
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/components/homepage/404.vue'),
      meta: { title: '路由不存在' }
    },
    {
      name: '403',
      path: '/403',
      component: () => import('@/components/homepage/403.vue'),
      meta: { title: '资源不可访问' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
})
/**
 * 全局路由守卫
 */
const rightPathList = ['/login', '/404', '/403'];//直接可以进入的页面
router.beforeEach((to, from, next) => {
  // debugger
  console.log('跳转到:', to.fullPath);
  if( to.path != '/login' ) {
    axios({
      method: 'get',
      url: '/api/user/login-test',
    })
    .then(response => {
      console.log("begin")
      var json = response.data;
      console.log(json.error)
        if (json.error == -1) {
          next({ path: '/login' })
        } else {
        if (json.error == 0) {
          if (rightPathList.includes(to.path)) {
            console.log("one")
            next();
          }
          else {
            console.log("two")
            next();
          }
        } else {
          next({ path: '/login' })
        }
      }
    })          
    .catch(error => {
      console.log("失败报文:", error);
      next({ path: '/login' })
    });
  }else{
    next()
  }
})


export default router
