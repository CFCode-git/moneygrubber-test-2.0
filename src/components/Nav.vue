<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      明细
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/chart" class="item" active-class="selected">
      <Icon name="charts"/>
      图表
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="scss">
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, .25);
    flex-direction: row;
    font-size: 12px;

    > .item {
      width: 33.333333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2px 0;

      .icon {
        width: 32px;
        height: 32px;
      }
    }

    > .item.selected {
      color: red;
    }
  }
</style>