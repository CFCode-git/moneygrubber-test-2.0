<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      明细
    </router-link>
    |
    <router-link to="/chart">
      <Icon name="charts"/>
      图表
    </router-link>
  </div>
</template>

<script lang="ts">
  import x from '@/assets/icons/charts.svg';

  console.log(x);
  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="SCSS">

</style>