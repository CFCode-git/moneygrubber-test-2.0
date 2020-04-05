<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTag === tag}"
          @click="toggle(tag)">{{tag}}
        <!--        :class="{selected: selectedTags.indexOf(tag)>=0}"-->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly dataSource: string[] | undefined;
    @Prop() readonly value!: string
    // selectedTags: string[] = [];
    selectedTag = this.value;

    toggle(tag: string) {
      if (this.selectedTag !== '') {
        this.selectedTag = '';
      } else {
        this.selectedTag = tag;
      }
      this.selectedTag = tag;
      // console.log(tag);
      this.$emit('update:value', this.selectedTag);
    }

    // toggle2(tag: string) {
    //   const index = this.selectedTags.indexOf(tag);
    //   if (this.selectedTags.length > 0) {
    //     this.selectedTags = [];
    //   }
    //   if (this.selectedTags.indexOf(tag) >= 0) {
    //     this.selectedTags.splice(index, 1);
    //   } else {
    //     this.selectedTags.push(tag);
    //   }
    //   this.$emit('update:value', this.selectedTags);
    // }

    createTag() {
      // this.$router.push('/labels')
      const name = window.prompt('请输入标签名');
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (this.dataSource) {
        this.$emit('update:dataSource', [...this.dataSource, name]);
      }
    }
  }
</script>

<style scoped lang="scss">
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;

    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;

      > li {
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background-color: #ffda47;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>