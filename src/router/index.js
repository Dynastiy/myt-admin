import Vue from "vue";
import VueRouter from "vue-router";

// Module Routes
import DashboardRoutes from "@/modules/dashboard/router";
import ManagementRoutes from "@/modules/management/router";
import ReportRoutes from "@/modules/reports-and-stats/router";
import EventLogRoutes from "@/modules/event-logs/router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    DashboardRoutes,
    ManagementRoutes,
    ReportRoutes,
    EventLogRoutes
  ),
});

export default router;
