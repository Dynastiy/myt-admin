<template>
  <div>
    <app-drawer />
    <div id="main">
      <app-header />
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";
import AppDrawer from "@/components/navigation/AppDrawer.vue";
export default {
  components: { AppHeader, AppDrawer },
  name: "DasgboardLayout",
};
</script>
