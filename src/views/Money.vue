<template>
  <div>
    <Layout class-prefix="layout">

      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Notes :value.sync="record.notes"/>
      <Tags :data-source.sync="tags" :value.sync="record.tag"/>
      <Types :value.sync="record.type"/>

    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';

  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  type Record = {
    tag: string;
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
  }

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = recordList;
    record: Record = {tag: '衣', notes: '', type: '-', amount: 0};

    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListonChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

