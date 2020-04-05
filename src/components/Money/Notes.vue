<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model="notes"
             placeholder="写点备注吧~">
      <!--           :value="value"-->
      <!--           @input="onInput"-->
      <!--             v-model="notes"-->
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    @Prop() readonly value!: string;
    notes = this.value;
    @Watch('notes')
    onNotesChange(){
      this.$emit('update:value', this.notes)
    }
  }
</script>


<style scoped lang="scss">
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>