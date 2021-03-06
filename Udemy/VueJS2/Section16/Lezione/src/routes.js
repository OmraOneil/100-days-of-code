// import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
      resolve(require('./components/user/User.vue'));
  })
};

export const routes = [
  // { path: '', component: Home, name: 'home' },
  // { path: '/user/:id', component: User, props: true },
  { path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
      }
   },
  {   path: '/user',
      // component: User,
      components: {
        default: User,
        'header-bottom': Header
      },
      children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit',
          component: UserEdit,
          name: 'userEdit',
          beforeEnter: (to, from, next) =>{
            console.log('inside route setup');
            next();
          }
         }
      ] },
    { path: '/redirect-me',
      // redirect: '/user'
      redirect: { name: 'home'}
    },
    { path: '*',
      redirect: {name: 'home'}
    }
];
