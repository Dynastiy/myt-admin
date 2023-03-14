<template>
  <div id="dashboard" class="spacer">
    <DashboardAnalytics />
    <DashboardStatistics />
    <TimelineSessions />
  </div>
</template>

<script>
import DashboardAnalytics from "../components/DashboardAnalytics.vue";
import DashboardStatistics from "../components/DashboardStatistics.vue";
import TimelineSessions from "../components/TimelineSessions.vue";
export default {
  components: {
    DashboardAnalytics,
    DashboardStatistics,
    TimelineSessions,
  },
};
</script>

<style></style>
