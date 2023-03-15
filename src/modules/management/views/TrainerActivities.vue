<template>
  <div id="all-users">
    <div class="header-area spacer">
      <!-- <h5 class="w-100">All Admins</h5> -->
      <div class="w-100">
        <button class="primary-btn d-flex align-items-center" style="gap: 10px">
          <i-icon icon="memory:plus" width="20px" />
          <span>add trainer cluster</span>
        </button>
      </div>
      <div class="w-100">
        <div class="search-field w-100">
          <label class="mb-0" for="">Search</label>
          <div class="d-flex align-items-center" style="gap: 20px">
            <div class="search-area">
              <i-icon icon="carbon:search" class="search-icon" />
              <input type="search" name="" id="" placeholder="User Email" />
            </div>
            <button class="primary-btn">filter</button>
          </div>
        </div>
      </div>
    </div>

    <!-- CLUSTER OPTIONS -->
    <div class="cluster-table-filters">
      <div class="container spacer pb-2">
        <div class="cluster-options">
          <span
            role="button"
            @click="switchActive('1')"
            :class="{ 'active-cluster': activeEl === '1' }"
            >All Clusters</span
          >
          <span
            role="button"
            @click="switchActive('2')"
            :class="{ 'active-cluster': activeEl === '2' }"
            >Pending Clusters</span
          >
        </div>
      </div>
      <div class="cluster-line"></div>

      <!-- CLUSTER TABLE  -->
      <div class="mt-4">
        <ClustersTable />
      </div>
    </div>
  </div>
</template>

<script>
import ClustersTable from "../components/tables/ClustersTable.vue";

export default {
  components: { ClustersTable },
  data: () => {
    return {
      activeEl: "1",
    };
  },
  methods: {
    switchActive(value) {
      this.activeEl = value;
    },
  },
};
</script>

<style></style>
