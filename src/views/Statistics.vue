<template>
  <div>
    <Layout notMoney="true">
      <div class="content">
        <header class="header">
          <div class="title">
            小财迷记账
          </div>
          <div class="table">
            <div class="datePicker">
              <div>
                <select v-model="year" class="year" name="year" id="year">
                  <option v-for="item in yearList" :key="item" :value="item">
                    {{item}}年
                  </option>
                </select>
              </div>
              <div class="month-wrapper">
                <select v-model="month" class="month" name="month" id="month">
                  <option v-for="item in monthList" :key="item" :value="item">
                    {{formatData(item)}}
                  </option>
                </select>
                <span>月</span>
              </div>
            </div>
            <div class="amount">
              <div class="expense">
                <div class="title">支出</div>
                <div class="number">
                  <span>{{handleAmount(expenseAmount)[0]}}</span>
                  <span class="small">.{{handleAmount(expenseAmount)[1]}}</span>
                </div>
              </div>
              <div class="income">
                <div class="title">收入</div>
                <div class="number">
                  <span>{{handleAmount(incomeAmount)[0]}}</span>
                  <span class="small">.{{handleAmount(incomeAmount)[1]}}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <ol class="records">
          <li v-for="(group,index) in groupedList" :key="index">
            <div class="recordTitle">
              <div class="date">
                <span>{{toDate(group)}}</span>
                <span>{{toWeek(group)}}</span>
              </div>
              <div class="detail">
                <span>支出：{{capitalFlow(group)[0]}}</span>
                <span>收入：{{capitalFlow(group)[1]}}</span>
              </div>
            </div>
            <div>
              <router-link class="recordList"
                           v-for="item in group.items" :key="item.id"
                           :to="`/record/edit/${item.id}`"
              >
                <div class="recordTag">
                  <Icon :name="item.tag.name"/>
                  <span>{{item.tag.value}}</span>
                </div>
                <span class="recordAmount">{{handleType(item)}}</span>
              </router-link>
            </div>
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

    formatData(value: any) {
      if (value < 10) {
        return '0' + value.toString();
      } else {
        return value.toString();
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

    // 当月总收入 number : string
    get expenseAmount() {
      const {currentRecordList} = this;
      let amount = 0;
      let expenseList: RecordItem[] = [];
      expenseList = currentRecordList.filter(recordItem => recordItem.type === '-');
      for (let i = 0; i < expenseList.length; i++) {
        amount += expenseList[i].amount;
      }
      // return Math.round(amount);
      // return amount.toFixed(2);
      return amount.toFixed(2);
      // return amount;
    }

    // 当月总支出  string
    get incomeAmount() {
      const {currentRecordList} = this;
      let amount = 0;
      let expenseList: RecordItem[] = [];
      expenseList = currentRecordList.filter(recordItem => recordItem.type === '+');
      for (let i = 0; i < expenseList.length; i++) {
        amount += expenseList[i].amount;
      }
      // return Math.round(amount);
      return amount.toFixed(2);
      // return amount;
    }

    // 分离总支出/收入的小数  string
    handleAmount(amount: string) {
      const item = amount.split('.');
      const numberBeforeDot = item[0];
      const numberAfterDot = item[1] || '00';
      return [numberBeforeDot,numberAfterDot];
    }


    // newList排序 result分组
    get groupedList() {
      const {currentRecordList} = this;
      if (currentRecordList.length === 0) {
        return [];
      }
      // 由于有sort改变了原来的数组可能会影响依赖于currentRecordList的内容，因此做一个深克隆
      const newList = clone(currentRecordList).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      const result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      return result;
    }

    // 计算每日支出收入 资金流  string
    capitalFlow(group: HashTableValue) {
      let expenseAmount = 0;
      let incomeAmount = 0;
      for (let i = 0; i < group.items.length; i++) {
        if (group.items[i].type === '-') {
          expenseAmount += group.items[i].amount;
        } else if (group.items[i].type === '+') {
          incomeAmount += group.items[i].amount;
        }
      }
      const expenseDaily = expenseAmount.toFixed(2);
      const incomeDaily = incomeAmount.toFixed(2);
      return [expenseDaily, incomeDaily];
    }

    // createdAt 转化 为 日期
    toDate(group: groupedList) {
      return dayjs(group.items[0].createdAt).format('MM月DD日');
    }

    // 日期转化为星期
    toWeek(group: groupedList) {
      const value = +dayjs(group.items[0].createdAt).format('d');
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

    handleType(record: RecordItem){
      if(record.type==='-'){
        return '- ' + record.amount
      }else{
        return record.amount.toString();
      }
    }

    @Watch('year')
    changeYear(year: string) {
      window.sessionStorage.setItem('year', year);
    }

    @Watch('month')
    changeMonth(month: string) {
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
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            color: #b29635;
          }

          .month {

            border: none;
            outline: none;
            background-color: inherit;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
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

              > .small {
                font-size: 15px;
              }
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

      .recordTitle {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        color: #888;

        .date {
          span:first-child {
            padding-right: 4px;
          }
        }

        .detail {
          span:last-child {
            padding-left: 4px;
          }
        }
      }

      .recordList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        color: #555;

        .recordTag {
          padding: 2px;
          display: flex;
          justify-content: center;
          align-items: center;

          .icon {
            background-color: $color-highlight;
            width: 28px;
            height: 28px;
            padding: 4px;
            border-radius: 50%;
          }

          > span {
            padding-left: 8px;
          }
        }
      }

    }
  }
</style>