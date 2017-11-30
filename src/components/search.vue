<template>
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="请输入省或市">
    </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .search-wrapper{
    position: absolute;
    width: 100%;
    top: 35px;
    left: 0;
    z-index: 1;
    text-align: center;
    .search-input{
      width: 300px;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      border: none;
      font-size: 14px;
    }
  }
</style>
