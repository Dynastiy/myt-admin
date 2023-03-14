<template>
  <div id="app-drawer" class="py-4">
    <ul>
      <li>
        <img class="menu-icon" src="@/assets/img/logo.svg" alt="" />
      </li>
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            :role="item.header ? '' : 'button'"
            @click="openSubMenu(item)"
            :class="{ 'active-link': item.parent === routeName }"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
              />
              <span> {{ item.title }} </span>
            </div>
            <span v-if="item.hasChildren">
              <i-icon
                :icon="subMenu ? 'prime:angle-down' : 'prime:angle-right'"
                width="35px"
              />
            </span>
          </span>
          <div class="sub-menu" v-if="subMenu === item.id">
            <span
              role="button"
              class="sub-menu-items"
              v-for="subMenu in item.children"
              :key="subMenu.id"
            >
              <i-icon :icon="subMenu.icon" class="menu-item-icon" />
              <span> {{ subMenu.title }} </span>
            </span>
          </div>
          <hr class="bg-white" v-if="item.hasLine" />
        </div>
      </li>

      <!-- <hr class="bg-white" /> -->
    </ul>
  </div>
</template>

<script>
import menu from "@/api/menu";
export default {
  data: () => {
    return {
      menu,
      subMenu: null,
    };
  },
  methods: {
    openSubMenu(item) {
      this.subMenu = this.subMenu === item.id ? null : item.id;
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
