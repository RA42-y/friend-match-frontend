// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
// @ts-ignore
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserPage from "../pages/UserPage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', title: 'Find Team', component: Team },
    { path: '/team/add', title: 'Create Team', component: TeamAddPage },
    { path: '/team/update', title: 'Update Team', component: TeamUpdatePage },
    { path: '/user', title: 'Personal Info', component: UserPage },
    { path: '/search', title: 'Search Users', component: SearchPage },
    { path: '/user/list', title: 'User List', component: SearchResultPage },
    { path: '/user/edit', title: 'Edit Info', component: UserEditPage },
    { path: '/user/login', title: 'Login', component: UserLoginPage },
    { path: '/user/update', title: 'Update Info', component: UserUpdatePage },
    { path: '/user/team/join', title: 'Joined Team', component: UserTeamJoinPage },
    { path: '/user/team/create', title: 'Created Team', component: UserTeamCreatePage },
]

export default routes;