<template>
  <div class="spacer px-0">
    <div id="reports-header">
      <div class="spacer py-3">
        <span
          role="button"
          class="report-header-item"
          :class="{ 'active-item': activeEl === '1' }"
          @click="switchSection('1')"
          >Website Section</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '2' }"
          role="button"
          @click="switchSection('2')"
          >Trainer Section</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('3')"
          >Affiliate Section</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeEl: "1",
    };
  },
  methods: {
    switchSection(value) {
      this.activeEl = value;
      this.$emit("switchData", value);
    },
  },
};
</script>

<style></style>
