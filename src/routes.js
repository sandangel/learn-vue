import User from './components/user/User'
import Home from './components/Home'
import Header from './components/Header'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'

export const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      top: Header
    }
  },
  {
    path: '/user',
    component: User,
    children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserDetail},
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  {path: '/redirect-me', redirect: '/user'},
  {path: '*', redirect: '/'}
]
