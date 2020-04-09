<template>
  <div>
    <Layout notMoney="true">
      <Types class-prefix="chart" :value.sync="type" :display-word="displayWord"/>
      <div class="chart-wrapper">
        <div class="chart">
          <div class="caption">
            <div class="expense">
              <span>总收入：{{1}}</span>
              <span>平均：{{2}}</span>
            </div>
            <div class="income">
              <span>总支出：{{2}}</span>
              <span>平均：{{3}}</span>
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
  import {Component} from 'vue-property-decorator';
  import Types from '@/components/Money/Types.vue';
  import dayjs from 'dayjs';
  import isLeapYear from 'dayjs/plugin/isLeapYear.js';
  import echarts from 'echarts';
  import 'zrender/lib/svg/svg';


  @Component({
    components: {Types}
  })
  export default class Chart extends Vue {
    type = '-';
    year = dayjs().year();
    month = dayjs().month() + 1;
    displayWord = ['按年', '按月'];

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
      this.makeChart();
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


    makeChart() {
      const content = echarts.init(document.getElementById('content') as HTMLDivElement, null, {renderer: 'svg'});
      const x = [...this.yearMap(this.yearExpense).keys()];
      const y1 = [...this.yearMap(this.yearExpense).values()];
      const y2 = [...this.yearMap(this.yearIncome).values()];

      const option: any = {
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
            interval: 0,
            fontSize: 8,
          },
        },
        yAxis: {},
        series: [
          {
            name: '支出',
            type: 'bar',
            color: '#3cb2ef',
            data: y1,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            },
            animationDelay: function (idx: number) {
              return idx * 50;
            }
          },
          {
            name: '收入',
            type: 'bar',
            color: '#ffdb00',
            data: y2,
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            },
            animationDelay: function (idx: number) {
              return idx * 70;
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx: number) {
          return idx * 50;
        }
      };
      content.setOption(option);
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
    font-size:16px;
    .chart {
      .caption {
        padding: 4px;
        text-align: center;
        font-size: 10px;
        color:#888;
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
