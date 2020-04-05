<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad :value.sync="record.amount"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>
      <Types :value.sync="record.type"/>

    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';

  type Record = {
    tag: string;
    notes: string;
    type: string;
    amount: number;
  }

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {tag: '', notes: '', type: '-', amount: 0};


    onUpdateTag(value: string) {
      this.record.tag = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

