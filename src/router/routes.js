import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Profile = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Notifications.vue");
const Icons = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () =>
  import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const Acao = () =>
  import(/* webpackChunkName: "common" */ "@/pages/Acao.vue");
const Pass = () =>
  import(/* webpackChunkName: "common" */ "@/pages/RecuperarPass.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/typography",
    children: [
      {
        path: "dashboard",
        name: "Indicadores",
        component: Dashboard,
      },
      {
        path: "profile",
        name: "Perfil",
        component: Profile,
      },
      {
        path: "pass",
        name: "Recuperar Palavra Pass",
        component: Pass,
      },
      {
        path: "acao",
        name: "Ação",
        component: Acao,
      },
      {
        path: "notifications",
        name: "Ajudas Humanitárias",
        component: Notifications,
      },
      {
        path: "icons",
        name: "Registar",
        component: Icons,
      },
      {
        path: "maps",
        name: "Gerir Iniciativa no Terreno",
        component: Maps,
      },
      {
        path: "typography",
        name: "Login",
        component: Typography,
      },
      {
        path: "table-list",
        name: "Documentar Ação",
        component: TableList,
      },
    ],
  },
  { path: "*", component: NotFound },
];



export default routes;
