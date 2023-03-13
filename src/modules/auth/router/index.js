const Login = () => import("../pages/loginPage.vue");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Login,
    // beforeEnter: checkLoggedIn,
    meta: {
      layout: "AppAuthLayout",
    },
  },
];

// function checkLoggedIn(to, from, next) {
//   var isAuthenticated = false;
//   if (store.getters["auth/isLoggedIn"]) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (!isAuthenticated) {
//     next();
//   } else {
//     next({
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
