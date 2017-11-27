<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './css/normalize.css';
  @import "./css/iconfont.css";
  #app{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #efefefef;
  }
</style>
