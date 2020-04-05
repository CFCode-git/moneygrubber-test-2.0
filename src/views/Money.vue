<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Notes :value.sync="record.notes"/>
      <Tags :tag-list.sync="tagList" :selected-tag.sync="record.tag" />
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
  import model from '@/model.ts';

  const recordList = model.fetch();

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {
    tagList: TagItem[] = [
      {name: 'food', value: '餐饮'},
      {name: 'entertainment', value: '娱乐'},
      {name: 'shopping', value: '购物'}
    ];

    recordList: RecordItem[] = recordList;
    record: RecordItem = {tag: {name: 'food', value: '餐饮'}, notes: '', type: '-', amount: 0};

    saveRecord() {
      const record2: RecordItem = model.clone(this.record);
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListonChange() {
      model.save(this.recordList);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

