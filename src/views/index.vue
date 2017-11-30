<template>
  <div class="weather-wrapper">
    <transtion></transtion>
    <search-model v-if="display"></search-model>
    <div class="img-wrapper" @click="searchNone()">
      <img src="../images/2.jpg" alt="">
      <div class="wrapper-left">
        <div @click.stop="searchBlock()"><i class="location iconfont icon-dingwei"></i></div>
        <div class="place-name">
          <span>中国</span>
          <span>北京</span>
        </div>
        <div class="time">
          <div>{{date}}</div>
          <div>{{time}}</div>
        </div>
      </div>
      <div class="travle-name">
        故宫
      </div>
    </div>
    <div class="weather-item">
      <div class="u-item">
        <div class="item-list details">
          <div class="temperature">
            26°
          </div>
          <div class="time time-bg">
            MONDAY 27
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import search from '../components/search.vue';

  const cityId = '101210607';
  export default {
    data () {
      return {
        time: '',
        date: '',
        times: [],
        cityIds: cityId,
        display: false
      };
    },
    mounted: function () {
      const _this = this;
      this.getWeather();
      this.getTime();
      setInterval(function () {
        _this.getTime();
      }, 1000);
    },
    components: {
      'search-model': search
    },
    methods: {
      getWeather: function () {
        axios({
          method: 'get',
          url: '/api/app/weather/listWeather?cityIds=' + this.cityIds
        }).then(function (response) {
          console.log(response);
        }, function (error) {
          console.log(error);
        });
      },
      getTime: function () {
        const oDate = new Date();
        const hour = oDate.getHours();
        const minute = ((oDate.getMinutes()).toString()).length === 1 ? '0' + oDate.getMinutes() : oDate.getMinutes();
        this.date = oDate.getFullYear() + '年' + (oDate.getMonth() + 1) + '月' + oDate.getDate() + '日';
        this.time = hour + ':' + minute;
      },
      searchBlock: function () {
        this.display = true;
      },
      searchNone: function () {
        this.display = false;
      }
    }
  };
</script>

<style scoped lang="scss">
  .weather-wrapper{
    position: relative;
    width: 950px;
    height: 661px;
    margin:auto;
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    .img-wrapper{
      position: relative;
      height: 439px;
      overflow: hidden;
      img{
        width: 100%;
      }
      .wrapper-left{
        position: absolute;
        top: 36px;
        left: 55px;
        text-align: center;
        .location{
          font-size: 60px;
          cursor: pointer;
        }
        .place-name{
          margin-top: 10px;
        }
        .time{
          margin-top: 10px;
        }

      }
      .travle-name{
        position: absolute;
        top: 36px;
        right: 55px;
        font-size: 35px;
      }
    }
    .weather-item{
      width: 100%;
      height: 190px;
      background: rgba(255,255,255,.4);
      font-size: 0;
      .u-item{
        display:inline-block;
        height: 100%;
        vertical-align: middle;
        font-size: 14px;
        .item-list{
          height: 100%;
          text-align: center;
          border-right:solid 1px #000000;
          &.details{
            box-sizing: border-box;
            padding: 24px;
          }
          .temperature{
            font-size: 85px;
          }
          .time-bg{
            line-height: 23px;
            padding: 0 20px;
            background: rgba(0,0,0,.5);
            color: #fff;
            border-radius: 20px;
          }
        }
      }
    }
  }
</style>
