<template>
  <div>
    <Layout :money="true">
      <Types class-prefix="chart" :value.sync="yyy"/>
    </Layout>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';

  @Component({
    components: {Types}
  })
  export default class Chart extends Vue {
    yyy = '-';
  }

</script>


<style scoped lang="scss">
  @import '~@/assets/styles/helper.scss';

  ::v-deep .chart-item {
    border: 1px solid #333;
    margin: 16px 0 8px 0;
    font-size: 14px;
    padding: 5px 56px;

    &:nth-child(1) {
      border-radius: 10px 0 0 10px;
    }

    &:nth-child(2) {
      border-radius: 0 10px 10px 0;
    }

    &.selected {
      background-color: #333333;
      color: $color-highlight;

      &::after {
        display: none;
      }
    }
  }
</style>
