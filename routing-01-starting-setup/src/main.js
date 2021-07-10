import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      name: 'teams',
      meta: {needsAuth : true}
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
          console.log('users beforeEnter')
          console.log(to, from);
          next();
      }
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true,
      name: 'team-members'
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
//   linkActiveClass: 'active'
//   scrollBehavior(to, from , savedPosition) {
//       console.log(to, from, savedPosition)
//       if (savedPosition) {
//           return savedPosition;
//       }
//       return { left: 0, top: 0};
//   }
});

router.beforeEach(function(to, from, next) {
    // console.log('Global before each.')
    // console.log(to,from)
    // if (to.name === 'team-members') {
    //     next();
    // }
    // next({name: 'team-members', params: {teamId: 't2'}});
    next()
})

router.afterEach(function(to, from) {
    // sending analytics data
    console.log('Global after each')
    console.log(to, from)
});

const app = createApp(App);

app.use(router);
app.mount('#app');
