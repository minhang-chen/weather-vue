<template>
    <div class="search-wrapper">
      <div style="position: relative;width: 320px;margin: auto">
        <input class="search-input" type="text" placeholder="请输入省或市" v-model="placeNames.type" ref="type">
        <i class="iconfont icon-sousuo" @click="sendPlaceName"></i>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';

  const placeName = '';
  export default {
    data () {
      return {
        cityName: {},
        countyName: {},
        placeNames: {
          type: placeName
        },
        placeId: ''
      };
    },
    mounted: function () {
      const _this = this;
      axios({
        method: 'get',
        url: '../../static/city.json'
      }).then(function (result) {
        _this.cityName = result.data.cities;
      });
      axios({
        method: 'get',
        url: '../../static/county.json'
      }).then(function (result) {
        _this.countyName = result.data;
      });
    },
    methods: {
      sendPlaceName: function () {
        this.$emit('palceName', this.placeName);
        this.$emit('palceId', this.placeId);
      }
    },
    watch: {
      placeNames: {
        handler: function () {
          this.placeName = this.$refs.type.value;
          // for (let i = 0; i < this.cityName.length; i++) {
          //   if (this.placeName === this.cityName[i].city) {
          //     this.placeId = this.cityName[i].cityid;
          //   }
          // }
          const _this = this;
          this.cityName.forEach(function (item, index, arr) {
            if (_this.placeName === item.city) {
              _this.placeId = item.cityid;
            }
          });
          this.countyName.forEach(function (item, index, arr) {
            if (_this.placeName === item.countyname) {
              _this.placeId = item.areaid;
            }
          });
          // console.log(this.placeId);
        },
        deep: true
      }
    }
  };
</script>

<style lang="scss">
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
    .icon-sousuo{
      position:absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
</style>
