<template>
  <div>
    <Layout>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>

      <div class="new">
        <button>新增标签</button>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>

      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">

          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button><Icon name="add"/></button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button><Icon name="minus"/></button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>完成</button>
          <button>.</button>
          <button>0</button>
          <button><Icon name="backspace"/></button>
        </div>

      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Money'
  };
</script>

<style scoped lang="scss">

</style>