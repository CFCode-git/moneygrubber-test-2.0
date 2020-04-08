<template>
  <div>
    <Layout class-prefix="layout">
      <!--      {{record}}-->
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Notes :value.sync="record.notes"/>

      <Tags v-if="record.type==='-'" :selected-tag.sync="record.tag" :expense="true" :tag-list="expenseTagList"/>
      <Tags v-else-if="record.type==='+'" :selected-tag.sync="record.tag" :tag-list="incomeTagList"/>
      <Types :value.sync="record.type" class-prefix="money" :cancelButton="true"/>
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
  import {defaultIncomeTags} from '@/defaultTags';

  // const recordList = model.fetch();

  @Component({
    components: {Types, Tags, Notes, NumberPad},
  })
  export default class Money extends Vue {
    incomeTagList: TagItem[] = defaultIncomeTags;
    record = this.initRecord();

    get recordList() {
      return this.$store.state.recordList;
    }

    get expenseTagList() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchRecordList');
      this.$store.commit('fetchTagList');
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
<style lang="scss" scoped>
  ::v-deep .money-item {
    padding: 15px 20px 5px;
  }
</style>
