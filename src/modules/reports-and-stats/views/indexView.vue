<template>
  <div>
    <ReportsHeader @switchData="switchData" />

    <div class="">
      <div class="spacer py-0">
        <WebsiteSection v-if="sectionName === '1'" />
        <TrainerSection v-if="sectionName === '2'" />
        <AffiliateSection v-if="sectionName === '3'" />
      </div>

      <div class="spacer pb-0">
        <DataTable :activeEl="sectionName" />
      </div>

      <div class="spacer pb-0">
        <div class="container fee-total">
          <h5 style="color: var(--primary-500); font-weight: 400">Fee Total</h5>
          <h5>$ 120, 000.00</h5>
        </div>
      </div>

      <div class="spacer">
        <button class="primary-btn">export report</button>
      </div>
    </div>
  </div>
</template>

<script>
import ReportsHeader from "../components/static/ReportsHeader.vue";
import AffiliateSection from "../components/tables/AffiliateSection.vue";
import DataTable from "../components/tables/DataTable.vue";
import TrainerSection from "../components/tables/TrainerSection.vue";
import WebsiteSection from "../components/tables/WebsiteSection.vue";
export default {
  components: {
    ReportsHeader,
    WebsiteSection,
    TrainerSection,
    AffiliateSection,
    DataTable,
  },
  data: () => {
    return {
      sectionName: "1",
    };
  },

  methods: {
    switchData(value) {
      this.sectionName = value;
    },
  },

  computed: {},
};
</script>

<style></style>
