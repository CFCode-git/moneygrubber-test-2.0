<template>
  <div>
    <Layout notMoney="true">
      <Types class-prefix="chart" :value.sync="selectedOption" :display-word="displayWord" :option-list="optionList"/>
      <div class="chart-wrapper">
        <div class="chart">
          <div class="caption">
            <div class="expense">
              <span>总收入：{{totalAmount[1]}}</span>
              <span>平均值：{{averageAmount[1]}}</span>
            </div>
            <div class="income">
              <span>总支出：{{totalAmount[0]}}</span>
              <span>平均值：{{averageAmount[0]}}</span>
            </div>
          </div>
          <div id="content" class="content" style="width: 100%;height:250px;">
          </div>
        </div>
        <div class="rankedListCaption">
          排行榜
        </div>
        <div class="rankedList">
          <div class="content">
            <ul>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
              <li>
                <div class="icon-wrapper">
                  <Icon/>
                </div>
                <div class="percent">
                  <span>购物</span>
                  <span>50%</span>
                  <div class="bar">11111111111111111111111111111111111</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';
  import dayjs from 'dayjs';
  import isLeapYear from 'dayjs/plugin/isLeapYear.js';
  import echarts from 'echarts';
  import 'zrender/lib/svg/svg';


  @Component({
    components: {Types}
  })
  export default class Chart extends Vue {
    selectedOption = 'year';
    year = dayjs().year();
    month = dayjs().month() + 1;
    displayWord = ['按年', '按月'];
    optionList = ['year', 'month'];

    // 当月天数
    get day() {
      const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (dayjs(this.year).isLeapYear() && this.month === 2) {
        return 29;
      } else {
        return dayList[this.month - 1];
      }
    }

    beforeCreate() {
      this.$store.commit('fetchRecordList');
    }

    created() {
      // console.log(echarts);
    }

    mounted() {
      this.makeChart(this.calculateChartData());
    }

    // 全部记录
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    // 当年记录
    get currentYearRecordList() {
      const {recordList} = this;
      const result: RecordItem[] = [];
      for (let i = 0; i < recordList.length; i++) {
        if (dayjs(recordList[i].createdAt).year() === this.year) {
          result.push(recordList[i]);
        }
      }
      return result;
    }

    //当年当月记录
    get currentRecordList() {
      const {recordList} = this;
      const currentMonthRecords: RecordItem[] = [];
      for (let i = 0; i < recordList.length; i++) {
        if ((dayjs(recordList[i].createdAt).year()) === this.year &&
          (dayjs(recordList[i].createdAt).month() + 1) === this.month) {
          currentMonthRecords.push(recordList[i]);
        }
      }
      return currentMonthRecords;
    }

    // type筛选器
    typeFilter(recordList: RecordItem[], type: string): RecordItem[] {
      const result: RecordItem[] = [];
      for (let i = 0; i < recordList.length; i++) {
        if (recordList[i].type === type) {
          result.push(recordList[i]);
        }
      }
      return result;
    }

    // 年支出列表
    get yearExpense() {
      return this.typeFilter(this.recordList, '-');
    }

    // 年收入列表
    get yearIncome() {
      return this.typeFilter(this.recordList, '+');
    }

    // 月支出列表
    get monthExpense() {
      return this.typeFilter(this.currentRecordList, '-');
    }

    // 月收入列表
    get monthIncome() {
      return this.typeFilter(this.currentRecordList, '+');
    }

    // 处理月数据
    monthMap(recordList: RecordItem[]) {
      // const key: string[] = [];
      const result = new Map<string, number>();
      // initData
      for (let i = 0; i < this.day; i++) {
        result.set((i + 1).toString(), 0);
      }
      for (const record of recordList) {
        const key = dayjs(record.createdAt).date().toString();
        const amount = result.get(key) as number;
        result.set(key, amount + record.amount);
      }
      return result;
    }

    // 处理年数据
    yearMap(recordList: RecordItem[]) {
      const result = new Map<string, number>();
      const keys = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
      for (const month of keys) {
        result.set(month, 0);
      }
      for (const record of recordList) {
        const key = keys[dayjs(record.createdAt).month()];
        const amount = result.get(key) as number;
        result.set(key, amount + record.amount);
      }
      return result;
    }


    // 图表数据计算器
    calculateChartData(): Map<string, number>[] {
      let expenseMap = new Map<string, number>();
      let incomeMap = new Map<string, number>();
      if (this.selectedOption === 'year') {
        expenseMap = this.yearMap(this.yearExpense);
        incomeMap = this.yearMap(this.yearIncome);
      } else if (this.selectedOption === 'month') {
        expenseMap = this.monthMap(this.monthExpense);
        incomeMap = this.monthMap(this.monthIncome);
      }
      return [expenseMap, incomeMap];
    }

    // 计算总值
    get totalAmount() {
      let totalExpenseAmount = 0;
      let totalIncomeAmount = 0;
      const result = this.calculateChartData();
      const totalExpenseList = [...result[0].values()];
      const totalIncomeList = [...result[1].values()];
      for (let i = 0; i < totalExpenseList.length; i++) {
        totalExpenseAmount += totalExpenseList[i];
        totalExpenseAmount = parseFloat(totalExpenseAmount.toFixed(2));
      }
      for (let i = 0; i < totalIncomeList.length; i++) {
        totalIncomeAmount += totalIncomeList[i];
        totalIncomeAmount = parseFloat(totalIncomeAmount.toFixed(2));
      }
      return [totalExpenseAmount, totalIncomeAmount];
    }


    // 计算均值
    get averageAmount() {
      let averageExpense;
      let averageIncome;
      const result = this.calculateChartData();
      const totalExpenseList = [...result[0].keys()];
      const totalIncomeList = [...result[1].keys()];
      averageExpense = this.totalAmount[0]/(totalExpenseList.length);
      averageIncome = this.totalAmount[0]/(totalIncomeList.length);
      averageIncome = parseFloat(averageIncome.toFixed(2));
      averageExpense = parseFloat(averageExpense.toFixed(2));
      return [averageExpense,averageIncome]
    }

    makeChart(data: Map<string, number>[]) {
      const content = echarts.init(document.getElementById('content') as HTMLDivElement, undefined, {renderer: 'svg'});
      // const x = [...this.yearMap(this.yearExpense).keys()];
      // const y1 = [...this.yearMap(this.yearExpense).values()];
      // const y2 = [...this.yearMap(this.yearIncome).values()];
      const x = [...data[0].keys()];
      const expenseY = [...data[0].values()];
      const incomeY = [...data[1].values()];

      const option: any = {
        grid: {
          top: '20%',
          bottom: '15%',
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: true},
            magicType: {show: true, type: ['line', 'bar']},
          }
        },
        legend: {
          data: ['收入', '支出']
        },
        xAxis: {
          data: x,
          splitLine: {
            show: false
          },
          axisTick: {
            lineStyle: {
              opacity: 0
            }
          },
          axisLabel: {
            interval: x.length > 12 ? 1 : 0,
            fontSize: 10,
          },
        },
        yAxis: {
          axisTick: {
            lineStyle: {
              opacity: 0.5
            }
          },
          axisLabel: {
            interval: 0,
            fontSize: 10,
          },
        },
        series: [
          {
            name: '支出',
            type: 'bar',
            color: '#3cb2ef',
            data: expenseY,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            },
            animationDelay: function (idx: number) {
              return idx * 10;
            }
          },
          {
            name: '收入',
            type: 'bar',
            color: '#ffdb00',
            data: incomeY,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            },
            animationDelay: function (idx: number) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx: number) {
          return idx * 5;
        }
      };
      content.setOption(option);
    }

    @Watch('selectedOption')
    onSelectedOptionChange() {
      this.makeChart(this.calculateChartData());
    }
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

  .chart-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 8px;
    font-size: 16px;

    .chart {
      .caption {
        padding: 8px;
        border-bottom: 1px solid;
        font-size: 14px;
        color: #888;
        margin-bottom: 8px;

        > .expense, .income {
          padding-bottom: 4px;
          display: flex;
          align-items: center;

          > span:first-child {
            /*background-color: #ffdb00;*/
            /*border-radius: 4px;*/
            padding: 0 4px;
            /*color:red;*/
          }

          > span:last-child {
            padding-left: 8px;
            font-size: 12px;
          }
        }
      }

      .content {
      }
    }

    .rankedListCaption {
    }

    .rankedList {
      overflow: auto;

      .content {
      }
    }
  }

</style>
