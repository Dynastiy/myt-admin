<template>
  <div>
    <app-header />
    <app-drawer />
    <slot />
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
