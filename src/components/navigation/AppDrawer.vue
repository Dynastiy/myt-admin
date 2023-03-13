<template>
  <div id="app-drawer">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span class="menu-item-link" :role="item.header ? '' : 'button'">
            <i-icon :icon="item.icon" v-if="item.icon" />
            <span> {{ item.title }} </span>
          </span>
          <div class="sub-menu">
            <span
              class="sub-menu-items"
              v-for="subMenu in item.children"
              :key="subMenu.id"
            >
              <i-icon :icon="subMenu.icon" />
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
    };
  },
};
</script>

<style></style>
