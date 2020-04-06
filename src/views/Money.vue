<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Notes :value.sync="record.notes"/>

      <Tags v-if="record.type==='-'" :selected-tag.sync="record.tag" :expense="true" :tag-list="expenseTagList"/>
      <Tags v-else-if="record.type==='+'" :selected-tag.sync="record.tag" :tag-list="incomeTagList"/>
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
  import {defaultIncomeTags} from '@/defaultTags';
  import {defaultExpenseTags} from '@/defaultTags';

  const recordList = model.fetch();

  @Component({
    components: {Types, Tags, Notes, NumberPad},
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    expenseTagList: TagItem[] = defaultExpenseTags;
    incomeTagList: TagItem[] = defaultIncomeTags;
    record: RecordItem = this.initRecord();

    created(){
      this.$store.commit('fetchRecordList')
    }

    initRecord() {
      return {tag: {name: 'food', value: '餐饮'}, notes: '', type: '-', amount: 0};
    }


    saveRecord() {
      this.$store.commit('createRecord', this.record);
    }

    @Watch('record.type')
    onRecordTypeChange(type: string) {
      if (type === '-') {
        this.record.tag = {name: 'food', value: '餐饮'};
      } else if (type === '+') {
        this.record.tag = {name: 'salary', value: '工资'};
      }
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

