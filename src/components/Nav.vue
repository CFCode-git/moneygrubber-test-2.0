<template>
  <div>
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/statistics">明细</router-link>
    |
    <router-link to="/chart">图表</router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="SCSS">

</style>