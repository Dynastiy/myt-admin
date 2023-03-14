<template>
  <div id="dashboard">
    <DashboardAnalytics />
    <dashboard-statistics />
    <ActivityTimeline />
    <DashboardSessions />
  </div>
</template>

<script>
import ActivityTimeline from "../components/ActivityTimeline.vue";
import DashboardAnalytics from "../components/DashboardAnalytics.vue";
import DashboardSessions from "../components/DashboardSessions.vue";
import DashboardStatistics from "../components/DashboardStatistics.vue";
export default {
  components: {
    DashboardAnalytics,
    DashboardStatistics,
    ActivityTimeline,
    DashboardSessions,
  },
};
</script>

<style></style>
