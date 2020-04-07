<template>
  <div>
    <Layout :money="true">
      <div class="content">
        <header class="header">
          <div class="title">
            小财迷记账
          </div>
          <div class="table">
            <div class="datePicker">
              <div>
                <select v-model="year" class="year">
                  <option v-for="item in yearList" :key="item" :value="item">
                    {{item}}年
                  </option>
                </select>
              </div>
              <div class="month-wrapper">
                <select v-model="month" class="month">
                  <option v-for="item in monthList" :key="item" :value="item">
                    {{monthFormat(item)}}
                  </option>
                </select>
                <span>月</span>
              </div>
            </div>
            <div class="amount">
              <div class="expense">
                <div class="title">支出</div>
                <div class="number">{{expenseAmount}}</div>
              </div>
              <div class="income">
                <div class="title">收入</div>
                <div class="number">{{incomeAmount}}</div>
              </div>
            </div>
          </div>
        </header>

        <ol class="records">
          <li v-for="group in result" :key="group.title">
            <h3>{{group.title}}</h3><span>{{toWeek(group.title)}}</span>
            <span>{{capitalFlow(group)}}</span>
            <!--&lt;!&ndash;            group传给一个函数&ndash;&gt; 得到week 支出收入-->
            <ol>
              <li v-for="item in group.items" :key="item.id">
                {{item.tag}}{{item.amount}}{{item.createdAt}}
              </li>
            </ol>
          </li>
        </ol>

      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';


  @Component({})
  export default class Statistics extends Vue {
    beforeCreate() {
      this.$store.commit('fetchRecordList');
    }

    year = parseInt((window.sessionStorage.getItem('year') || '0'), 10) || dayjs().year();
    month = parseInt((window.sessionStorage.getItem('month') || '0'), 10) || (dayjs().month() + 1);

    get yearList() {
      const thisYear = dayjs().year();
      let yearBegin = 1996;
      const yearList: number[] = [];
      while (yearBegin <= thisYear) {
        yearList.push(yearBegin);
        yearBegin++;
      }
      return yearList;
    }

    monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    monthFormat(month: number) {
      if (month < 10) {
        return '0' + month.toString();
      } else {
        return month.toString();
      }
    }


    // 全部记录
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    // 筛选当年当月记录
    get currentRecordList() {
      const {recordList} = this;
      const currentRecordList: RecordItem[] = [];
      for (let i = 0; i < recordList.length; i++) {
        if ((dayjs(recordList[i].createdAt).year()) === this.year &&
          (dayjs(recordList[i].createdAt).month() + 1) === this.month) {
          currentRecordList.push(recordList[i]);
        }
      }
      return currentRecordList;
    }

    // 当月总收入
    get expenseAmount() {
      const {currentRecordList} = this;
      let amount = 0;
      let expenseList: RecordItem[] = [];
      expenseList = currentRecordList.filter(recordItem => recordItem.type === '-');
      for (let i = 0; i < expenseList.length; i++) {
        amount += expenseList[i].amount;
      }
      return amount;
    }

    // 当月总支出
    get incomeAmount() {
      const {currentRecordList} = this;
      let amount = 0;
      let expenseList: RecordItem[] = [];
      expenseList = currentRecordList.filter(recordItem => recordItem.type === '+');
      for (let i = 0; i < expenseList.length; i++) {
        amount += expenseList[i].amount;
      }
      return amount;
    }

    get result() {
      const {currentRecordList} = this;
      // const hashTable: {title: string,items: RecordItem[]}[]
      // 由于有sort改变了原来的数组可能会影响依赖于currentRecordList的内容，因此做一个深克隆
      const newList = clone(currentRecordList).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      console.log(newList);
      return []
    }

    // 计算每日支出收入 资金流
    capitalFlow(group: HashTableValue) {
      // console.log(group);
      let expenseAmount = 0;
      let incomeAmount = 0;
      for (let i = 0; i < group.items.length; i++) {
        if (group.items[i].type === '-') {
          expenseAmount += group.items[i].amount;
        } else if (group.items[i].type === '+') {
          incomeAmount += group.items[i].amount;
        }
      }
      return {expenseAmount,incomeAmount};
    }

    toWeek(value: number) {
      return [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
      ][value];
    }

    @Watch('year')
    changeYear(year: string) {
      console.log(typeof year);
      window.sessionStorage.setItem('year', year);
    }

    @Watch('month')
    changeMonth(month: string) {
      console.log(typeof month);
      window.sessionStorage.setItem('month', month);
    }

  }
</script>

<style scoped lang="scss">
  @import '~@/assets/styles/helper.scss';

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      flex-direction: column;
      position: relative;
      background-color: $color-highlight;

      > .title {
        text-align: center;
        font-size: 20px;
        padding: 8px 0;
        font-family: $font-kai;
        position: relative;

      }

      .table {
        display: flex;
        align-items: center;
        padding-bottom: 4px;

        .datePicker {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;

          &::after {
            content: '';
            display: block;
            width: 1px;
            height: 32px;
            position: absolute;
            background: #b29635;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }

          > .month-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .year {
            padding: 0 5px;
            border: none;
            outline: none;
            background-color: inherit;
            -webkit-appearance: none;
            color: #b29635;
          }

          .month {

            border: none;
            outline: none;
            background-color: inherit;
            -webkit-appearance: none;
            font-size: 24px;

            > span {
              font-size: 14px;
            }
          }
        }

        .amount {
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: space-between;

          .expense, .income {
            padding: 0 24px;

            .title {
              font-size: 14px;
              color: #b29635;
            }

            .number {
              font-size: 20px;
            }
          }

          .income {
            margin-right: 20%;
          }
        }


        /*.amount {*/
        /*  display: flex;*/
        /*  width: 100%;*/
        /*  justify-content: space-evenly;*/


        /*}*/
      }
    }

    .records {
      flex-grow: 1;
      overflow: auto;
      padding: 16px;
    }
  }
</style>