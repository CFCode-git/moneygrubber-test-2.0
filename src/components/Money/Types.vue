<template>
  <div class="types-wrapper">
    <ul class="types">
      <li :class="type==='-'&& 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type==='+'&& 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
    <button class="cancel">取消</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    type = '-';
    selectType(type: string) {
      if (type !== '+' && type !== '-') {
        throw new Error('this is a wrong type');
      }
      this.type = type;
    }
  }
</script>

<style scoped lang="scss">
  .types-wrapper {
    background: #ffda47;
    display: flex;
    justify-content: center;
    position: relative;

    .types {
      background: #ffda47;
      display: flex;
      font-size: 20px;
      /*margin-top:5px;*/
      > li {
        width: 50%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px 20px 10px;

        &.selected::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #333;
        }
      }
    }

    .cancel {
      font-size: 14px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border: 0;
      background-color: transparent;
      padding-right: 16px;
      padding-top: 7px;
    }
  }
</style>