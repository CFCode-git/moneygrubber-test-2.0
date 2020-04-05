<template>
  <div class="tag">
    <div class="header">
      <Icon name="left"/>
      <span>添加支出类别</span>
      <button class="ok">完成</button>
    </div>
    <div class="select">
      <Icon name="food"/>
      <span>餐饮</span>
    </div>
    <div class="contents">
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="caption">
          餐饮
        </div>
        <ul class="tags">
          <li v-for="tag in foodTags" :key="tag.name">
            <Icon :name="tag.name"/>
            <span>{{tag.value}}</span>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {
    defaultEntertainmentTags,
    defaultFoodTags,
    defaultHomeTags,
    defaultShoppingTags,
    defaultSocietyTags,
    defaultOtherTags,
    defaultTrafficTags
  } from '@/defaultTags';

  @Component
  export default class AddTag extends Vue {
    foodTags = defaultFoodTags;
    shoppingTags = defaultShoppingTags;
    trafficTags = defaultTrafficTags;
    homeTags = defaultHomeTags;
    entertainmentTags = defaultEntertainmentTags;
    societyTags = defaultSocietyTags;
    otherTags = defaultOtherTags;
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/styles/helper.scss';

  .tag {
    margin-bottom: 30px;
    height:100vh;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: $color-highlight;
      font-size: 18px;

      > .ok {
        font-size: 14px;
        border: 0;
        background-color: transparent;
      }
    }

    .select {
      padding: 8px 16px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .icon {
        height: 40px;
        width: 40px;
        background-color: $color-highlight;
        padding: 5px;
        border-radius: 50%;
      }
    }
    .contents{
      overflow: auto;
      /*display: flex;*/
      /*flex-direction: column;*/
      padding: 20px 8px 0 8px;
      .content {
        font-size: 18px;
        /*padding: 20px 8px 0px 8px;*/

        .caption {
          text-align: center;
          margin: 5px;
        }

        .tags {
          display: flex;
          font-size: 14px;
          flex-wrap: wrap;

          li {
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 8px 10px;

            .icon {
              height: 40px;
              width: 40px;
              background-color: #e8e8e8;
              padding: 5px;
              border-radius: 50%;
            }
          }
        }
      }
    }

  }
</style>