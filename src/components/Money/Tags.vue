<template>
  <div class="tags">
    <ul class="list">
      <li v-for="(tag,index) in tagList" :key="index"
          :class="{selected: highlight.name === tag.name }"
          @click="toggle(tag)">
          <Icon :name="tag.name"/>
        <span>{{tag.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly tagList!: TagItem[];
    @Prop() readonly selectedTag!: TagItem;
    highlight = this.selectedTag;
    toggle(tag: TagItem) {
      this.highlight= tag;
      console.log(tag);
      this.$emit('update:selected-tag', this.highlight);
    }
    // createTag() {
    //   // this.$router.push('/labels')
    //   const name = window.prompt('请输入标签名');
    //   if (name === '') {
    //     window.alert('标签名不能为空');
    //   } else if (this.dataSource) {
    //     this.$emit('update:dataSource', [...this.dataSource, name]);
    //   }
    // }
  }
</script>

<style scoped lang="scss">
  .tags {
    font-size: 12px;
    padding: 16px;
    flex-grow: 1;
    overflow: auto;
    > .list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > li {
        width:25%;
        display: flex;
        align-items: center;
        flex-direction:column;
        padding:8px 10px;
        .icon {
          height:50px;
          width:50px;
          background-color:#e8e8e8;
          padding:5px;
          border-radius: 50%;
        }
        &.selected{
          .icon{
            background-color: #ffda47;
          }
        }
      }
    }
  }
</style>

